import style from "./App.module.scss";
import avatar from "../image/avatar.png";
import Menu from "../components/menu/menu";

function App() {
    return (
        <div className="row">
            <div className={style.app}>
                <div className={style.avatar}>
                    <img src={avatar} alt="no face"/>
                </div>
                <div className={style.intro}>
                    <h1 className={style.intro_main}>Hello Worlds !!</h1>
                    <p className={style.intro_second}>Welcome to my dungeon! <br/> Here, you can find all of my weapons
                        and other items. </p>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default App
