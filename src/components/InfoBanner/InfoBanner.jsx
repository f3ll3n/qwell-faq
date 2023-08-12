import React from "react";
import style from "./InfoBanner.module.scss";

export const InfoBanner = () => {
  return (
    <div className={style.InfoBanner}>
      <div>
        Этот <strong>FAQ</strong> содержит ответы на основные вопросы о нашей
        платформе.
      </div>
      <br />
      <div>
        Мы постоянно развиваемся и добавляет новые функции, поэтому этот
        документ <span className={style.red}>может</span> содержать устаревшую
        информацию.
      </div>
    </div>
  );
};
