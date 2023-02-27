import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ThemeProvider from "./providers/ThemeProvider";
import { useSelector } from "react-redux";
import bg02 from  './components/Footer/Settings/SettingsItem/02_small.jpg'
// import bg01 from  '../public/02 _big.jpg';
// import bg03 from  '../public/03 _big.jpg';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);
  const backgroundNumber = useSelector(state => state.background.backgroungNumber)
  console.log(backgroundNumber);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }

    const background = document.querySelector('body')
    console.log(background);
    if (backgroundNumber === '02') {
      background.style.backgroundImage = `url("${bg02}")`;
    }
    
    // background.style.backgroundImage = `url(public/${backgroundNumber}_big.jpg)`;
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>

      <ThemeProvider>
        <BrowserRouter>
          <div className="app" >
            <AppRouter />
          </div>

        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
