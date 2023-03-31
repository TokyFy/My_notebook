import style from "./App.module.scss";
import Menu from "../components/menu/menu";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context";

import { avatar, avatarLight } from "../image";

function App() {
  const containerRef = useRef(null);

  let [theme, setTheme] = useState("LIGHT");

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "LIGHT");

    document.fonts.onloadingdone = () => {
      const loader = document.getElementById("loadingScreen")!;
      if (loader) {
        loader.remove();
      }
    };
  }, []);

  useEffect(() => {
    theme === "DARK"
      ? (document.body.style.backgroundColor = "#030018")
      : (document.body.style.backgroundColor = "#F1EFFF");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const switchTheme = () => {
    theme === "DARK" ? setTheme("LIGHT") : setTheme("DARK");
  };

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.09,
        mobile: {
          breakpoint: 0,
          smooth: true,
        },
        tablet: {
          breakpoint: 0,
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <main data-scroll-container="" ref={containerRef}>
        <div data-scroll-section="">
          <ThemeContext.Provider value={theme}>
            <div className="row">
              <div data-theme={theme} className={style.app}>
                <div
                  onClick={() => switchTheme()}
                  className={style.themeSwitcher}
                >
                  {theme === "DARK" ? "SUN" : "MOON"}
                </div>
                <div className={style.avatar}>
                  <img
                    src={theme === "DARK" ? avatarLight : avatar}
                    alt="no face"
                  />
                </div>
                <div className={style.intro}>
                  <h1 className={style.intro_main}>Hello Worlds !!</h1>
                  <p className={style.intro_second}>
                    Welcome to my dungeon! <br /> Here, you can find all of my
                    weapons and other items.{" "}
                  </p>
                </div>
                <Menu />
                <p className={style.footer}>
                  Made with 🖤 by <span className={style.author}>Toky</span>
                </p>
              </div>
            </div>
          </ThemeContext.Provider>
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
