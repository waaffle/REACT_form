import React from "react";
import cl from './App.css';
import MyQuestion from "./components/question/MyQuestion";
import MyButton from "./components/button/MyButton";

function App() {
  return (
    <div className={cl.App}>
      <MyQuestion question={'Sunt consequat proident enim nisi exercitation nisi.'}/>
    </div>
  );
}

export default App;
