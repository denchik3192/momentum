import React, { useContext, useEffect, useState } from "react";
import "./App.scss";
import { AuthContext } from "./context";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  const [isAuth, setIsAuth] = useState(false);  

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      console.log(isAuth);
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, }}>
      <BrowserRouter>
        <div className="app">
          <AppRouter />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
