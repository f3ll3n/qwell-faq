import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Header } from "../../components/Header/Header";
import { InfoBanner } from "../../components/InfoBanner/InfoBanner";
import { Question } from "../../components/Question/Question";
import { allQuestions } from "../../data/data";
import style from "./App.module.scss";

export const Context = React.createContext();

function App() {
  const [navbarContext, setNavbarContext] = useState(true);
  return (
    <Context.Provider value={[navbarContext, setNavbarContext]}>
      <div className={style.App}>
        <div className={style.app_wrapper}>
          <Header />
          <InfoBanner />
          <div className={style.main}>
            {allQuestions.map((question, idx) => {
              return <Question key={idx} question={question} />;
            })}
          </div>
          <Navbar />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
