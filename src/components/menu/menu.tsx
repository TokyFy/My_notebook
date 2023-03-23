import React, { FunctionComponent } from 'react';
import style from "./menu.module.scss";

import MenuCard from "./menuCard";

import * as Image from "../../image";

const menu: FunctionComponent = () => {
  return (<div className={style.menu}>
      <MenuCard img={Image.penImage} label={"Notes"}/>
      <MenuCard img={Image.moviesImage} label={"movies"}/>
      <MenuCard img={Image.toolsImage} label={"tools"}/>
      <MenuCard img={Image.keyboardImage} label={"keyboard"}/>
      <MenuCard img={Image.gameImage} label={"game"}/>
      <MenuCard img={Image.craftImage} label={"craft"}/>
      <MenuCard img={Image.trainingImage} label={"training"}/>
      <MenuCard img={Image.musicImage} label={"musics"}/>
      <MenuCard img={Image.notebookImage} label={"notebook"}/>
  </div>);
};

export default menu;
