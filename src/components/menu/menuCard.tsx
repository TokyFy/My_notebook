import React, { FunctionComponent } from 'react';
import style from "./menu.module.scss";

interface Props {
    img : string;
    label : string;
}

const MenuCard: FunctionComponent<Props> = ({ img , label} ) => {
  return (<div className={style.card}>
      <div className={style.card_image}>
          <img src={img} alt={label}/>
      </div>
      <p className={style.card_label}>{label}</p>
  </div>);
};

export default MenuCard;
