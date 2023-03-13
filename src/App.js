import React, { useEffect, useState } from "react";
import "./App.scss";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ThemeProvider from "./providers/ThemeProvider";
import { useSelector } from "react-redux";
import bg02 from "./components/Footer/Settings/SettingsItem/02_small.jpg";
import bg03 from "./components/Footer/Settings/SettingsItem/03_small.jpg";
import bg01 from "./components/Footer/Settings/SettingsItem/01_small.jpg";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const backgroundNumber = useSelector(
    (state) => state.background.backgroungNumber
  );

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    
    const background = document.querySelector(".app .fullscreen");

    if (backgroundNumber === "02") {
      background.style.backgroundImage = `url("${bg02}")`;
    }
    if (backgroundNumber === "03") {
      background.style.backgroundImage = `url("${bg03}")`;
    }
    if (backgroundNumber === "01") {
      background.style.backgroundImage = `url("${bg01}")`;
    }
  }, [backgroundNumber]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <ThemeProvider>
        <BrowserRouter>
          <div className="app">
            <AppRouter />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
