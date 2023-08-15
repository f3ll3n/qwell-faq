import { useContext, useState } from "react";
import style from "./BurgerButton.module.scss";
import classNames from "classnames";
import { Context } from "../../pages/App/App";

function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarContext, setNavbarContext] = useContext(Context);
  const handleOnClick = () => {
    setNavbarContext(!navbarContext);
    console.log(navbarContext);
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.BurgerButton}>
      <div
        onClick={() => handleOnClick()}
        className={classNames(
          isOpen ? style.menu_active : null,
          style.menu_button,
        )}
      >
        <span class={style.menu_lines}></span>
      </div>
    </div>
  );
}

export default BurgerButton;
