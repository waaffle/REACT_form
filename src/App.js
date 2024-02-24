import React from "react";
import cl from './App.css';
import MyQuestion from "./components/question/MyQuestion";

function App() {
  return (
    <div className={cl.App}>
      <MyQuestion question={'Ad duis ea amet adipisicing?'}/>
    </div>
  );
}

export default App;
