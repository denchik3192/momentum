import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isFullscreenActive, setIsFullscreenActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
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
