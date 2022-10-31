
import React, { useContext, useState } from  "react";
import "./App.scss";
import Header from "./components/Header/Hedaer";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from "./reduxTK/toolkitSlice";
import Auth from "./components/Auth/Auth";
import { AuthContext } from "./context";

function App() {
  const [isAth, setIsAuth] = useState(false)
  const count = useSelector(state => state.toolkit.count);
  const dispatch = useDispatch();

  return (
    <AuthContext.Provider value={{isAth, setIsAuth}}>
      <div className="app">
      <Header />
      <Auth/>
      <Main />
      <Footer />
    </div>
    </AuthContext.Provider>
    
  );
}

export default App;
