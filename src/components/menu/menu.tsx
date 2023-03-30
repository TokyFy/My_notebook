import React, { FunctionComponent } from "react";
import style from "./menu.module.scss";

import MenuCard from "./menuCard";

import * as Image from "../../image";

const menu: FunctionComponent = () => {
  return (
    <div className={style.menu}>
      <MenuCard img={Image.BlogsImage} label={"Blogs"} />
      <MenuCard img={Image.ToolsImage} label={"Tools"} />
      <MenuCard img={Image.NotesImage} label={"Notes"} />
      <MenuCard img={Image.GamesImage} label={"Games"} />
      <MenuCard img={Image.MusicsImage} label={"Musics"} />
      <MenuCard img={Image.GuestBooksImage} label={"Guestbooks"} />
      <MenuCard img={Image.TrainingImage} label={"Training"} />
      <MenuCard img={Image.CraftImage} label={"Craft"} />
      <MenuCard img={Image.ResourcesImage} label={"Resources"} />
    </div>
  );
};

export default menu;
