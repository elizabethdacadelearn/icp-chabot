import { useNavigate } from "react-router-dom";
import NavBar from "./navbar";

import Button from "../store/login";
import { useAuth } from "../store/authetication";
const WelcomePage = () => {
  const { isAuthenticated, login, principal, logout } = useAuth();
  const router = useNavigate();
  return (
    <div className="wel">
      <NavBar />
      <div className="body">
        <h1 className="">What can I help with?</h1>

        {isAuthenticated ? (
          <>
            <button className="button" onClick={() => router("/find")}>
              Get Started
            </button>
          </>
        ) : (
          <>
            <Button />
          </>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
