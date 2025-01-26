import { useEffect, useState } from "react";
import { chat_backend } from "declarations/chat_backend";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [res, setRes] = useState();
  useEffect(() => {
    chat_backend.UserHistory().then((result) => {
      setData(result[0].history);
    });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    chat_backend.update(search, res).then((result) => {
      console.log(result, "seearch user");
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
            {!data ? (
              <div className="text-center">
                <h1 className="font-bold">No search history</h1>
              </div>
            ) : (
              <div>
                {data.map((val, _index) => (
                  <div className="" key={_index}>
                    <p
                      className="font-bold text-sm truncate cursor-pointer"
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
