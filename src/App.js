import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import YesPage from "./pages/YesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/yes" element={<YesPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
