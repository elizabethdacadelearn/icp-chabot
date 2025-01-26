import { useEffect, useState } from "react";
import { chat_backend } from "declarations/chat_backend";
import { useNavigate } from "react-router-dom";
import { GoogleGenerativeAI } from "@google/generative-ai";
const MainPage = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [res, setRes] = useState("");
  useEffect(() => {
    chat_backend.UserHistory().then((result) => {
      console.log(result);
      setData(result[0].history);
    });
  }, []);

  const genAi = new GoogleGenerativeAI(
   
  );

  const handlesubmit = async (e) => {
    e.preventDefault();
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `answer user question based on user search that is ${search} and should be less than 300 words`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    setRes(text);
    chat_backend.update(search, res).then((result) => {
      console.log(result, "seearch user");
    });
    chat_backend.UserHistory().then((result) => {
      setData(result[0].history);
    });
  };
  const handleclerahistory = () => {
    chat_backend.clear_history().then((result) => {
      console.log(result, "clear history");
    });
    chat_backend.UserHistory().then((result) => {
      setData(result[0].history);
    });
  };
  return (
    <div className="main">
      <div className="div1">
        <div className="rt">
          <h1 className="">icpGPT</h1>
          <div className="mt-3">
            {!data || data.length == 0 ? (
              <div className="">
                <h1 className="yu">No search history</h1>
              </div>
            ) : (
              <div>
                {data.map((val, _index) => (
                  <div className="" key={_index}>
                    <p
                      className="y"
                      onClick={() => setRes(val.response)}
                    >
                      {val.request}
                    </p>
                  </div>
                ))}

                <div className="">
                  <button onClick={handleclerahistory} className="button">
                    clear history
                  </button>
                </div>
              </div>
            )}
          </div>
          <button>logout</button>
        </div>
      </div>
      <div className="div2">
        <div className="">
          <div id="responseContainer" className="response-container">
            <p id="aiResponse">{res}</p>
          </div>
        </div>
        <div className="">
          <form action="" onSubmit={handlesubmit}>
            <div className="textarea-container">
              <textarea
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="customTextarea"
                placeholder="Type your message here..."
              ></textarea>
              <button id="searchButton" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
