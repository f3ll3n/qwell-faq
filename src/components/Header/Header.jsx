import React from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import Logo from "./svg/logo_icon.svg";
import LogoText from "./svg/logo_icon_text.svg";
import CloseIcon from "./svg/Close.svg";
import style from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={style.Header}>
      <div className={style.header_top_block}>
        <div className={style.logo_block}>
          <div className={style.logo_icon_block}>
            <img src={Logo} alt="logo icon" />
          </div>
          <img src={LogoText} alt="logo icon text" />
        </div>
        <div>
          <img className={style.close} src={CloseIcon} alt="close icon" />
        </div>
      </div>

      <div>
        <ProgressBar />
      </div>
    </div>
  );
};
