import React from "react";
import cl from './App.css';
import MyQuestion from "./components/question/MyQuestion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import YesPage from "./pages/YesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/yes" element={<YesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
