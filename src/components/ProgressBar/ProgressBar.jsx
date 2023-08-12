import React, { useState } from 'react'
import classNames from 'classnames';
import style from './ProgressBar.module.scss';
import svg1 from './svg/svg1.svg';
import svg2 from './svg/svg2.svg';
import svg3 from './svg/svg3.svg';

export const ProgressBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={style.ProgressBar}>
        <div className={style.inner_progressbar}>
            <div className={style.progressbar_text}>
                Работа - это просто FAQ
            </div>
            <div onClick={() => handleOnToggleMenu()} className={style.progressbar_toggle_button}>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
                <div className={style.circle}></div>
            </div>
        </div>
      <div className={classNames(style.toggle_menu, isOpen ? null : style.hidden)}>
          <div className={style.toggle_menu_transition}>
            <div className={style.rounded_figure}>
              <div className={style.circle_layer}></div>
            </div>
            <div className={style.figure}></div>
        </div>
          <div className={style.toggle_menu_nav}>
            <nav className={style.navbar}>
              <li className={style.navbar_item}>
                <img src={svg3} alt='svg' />
                <span>Поиск</span>
                </li>
              <li className={style.navbar_item}>
                <img src={svg2} alt='svg' />
                <span>
                  Поделиться
                </span>
                </li>
              <li className={style.navbar_item}>
                <img src={svg1} alt='svg' />
                <span>
                  Открыть в ...
                </span>
               </li>
            </nav>
          </div>
        </div>
    </div>
  )
}
