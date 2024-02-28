import React from "react";
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
