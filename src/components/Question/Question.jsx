import React, { useState } from 'react'
import style from './Question.module.scss'
import classNames from 'classnames';
import arrow from './svg/arrow.svg';

export const Question = ({question}) => {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const handleOnToggle = () => {
    setToggleAccordion(!toggleAccordion);
  }

  return (
      <div className={style.Question}>
        <div className={classNames(style.arrow, toggleAccordion && style.rotate)}>
            <img src={arrow} alt='arrow icon'/>
        </div>
          <div onClick={() => handleOnToggle()}>
              <div className={style.question_name}>
                  {question.name}
              </div>
              <div className={classNames(toggleAccordion ? style.show : style.hide, style.response)}>
                  <div className={style.accordeon_inner}>
                    {question.response}
                  </div>
              </div>
          </div>
    </div>
     
  )
}
