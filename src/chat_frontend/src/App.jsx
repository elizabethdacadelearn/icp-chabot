import { useState } from "react";
//import { chat_backend } from 'declarations/chat_backend';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import MainPage from "./pages/mainpage";
import { AuthProvider } from "./auth/authetication";
function App() {
  
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/find" element={<MainPage/>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
