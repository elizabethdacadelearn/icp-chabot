import { useState } from "react";
//import { chat_backend } from 'declarations/chat_backend';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import MainPage from "./pages/mainpage";
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/find" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
