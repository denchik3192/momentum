
import React, { useContext } from  "react";
import "./App.scss";
import Header from "./components/Header/Hedaer";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from "./reduxTK/toolkitSlice";
import Auth from "./components/Auth/Auth";

function App() {
  
  const count = useSelector(state => state.toolkit.count);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Header />
      <Auth/>
      <Main />
      {/* <h2>Counter:{count}</h2> */}
      {/* <button onClick={() => dispatch(increment())}>increment </button>
      <button onClick={() => dispatch(decrement())}>decrement </button> */}
      <Footer />
    </div>
  );
}

export default App;
