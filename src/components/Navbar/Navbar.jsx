import { useContext, useState } from "react";
import style from "./Navbar.module.scss";
import { Context } from "../../pages/App/App";
import classNames from "classnames";

const BurgerMenu = () => {
  const [navbarContext, setNavbarContext] = useContext(Context);
  const [show] = useState(false);

  return (
    <div
      className={classNames(navbarContext ? style.active : null, style.navBar)}
    >
      {navbarContext + ""}
    </div>
  );
};

export default BurgerMenu;
