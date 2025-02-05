import { chat_backend } from "declarations/chat_backend";
import Button from "../store/login";
const NavBar = () => {
  chat_backend.whoami().then((result) => {});
  return (
    <div className="nav">
      <h1 className="">icpGPT</h1>
      <Button />
    </div>
  );
};

export default NavBar;
