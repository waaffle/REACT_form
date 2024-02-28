import React from "react";
import cl from '../App.css';
import MyQuestion from "../components/question/MyQuestion";

function Home() {
  return (
    <div className={cl.App}>
      <MyQuestion question={'Скинешь вторую практику ПИС?'}/>
    </div>
  );
}

export default Home;