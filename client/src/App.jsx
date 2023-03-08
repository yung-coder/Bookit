import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/userContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
