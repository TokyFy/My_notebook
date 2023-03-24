import React, {FunctionComponent, useContext} from 'react';
import style from "./menu.module.scss";
import themeContext from "../../context/themeContext";

interface Props {
    img : string;
    label : string;
}

const MenuCard: FunctionComponent<Props> = ({ img , label} ) => {

    const theme = useContext(themeContext);

    return (<div data-theme={theme} className={style.card}>
      <div className={style.card_image}>
          <img src={img} alt={label}/>
      </div>
      <p className={style.card_label}>{label}</p>
  </div>);
};

export default MenuCard;
