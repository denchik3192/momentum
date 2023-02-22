
import { Refresh } from "@mui/icons-material";
import classNames from "classnames";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuotes } from "../../reduxTK/quoteSlice";
import s from "./footer.module.scss";
import Settings from "./Settings/Settings";
import ToDo from "./todo/ToDo";

const Footer = (props) => {
  const [todoActive, setTodoActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const dispatch = useDispatch();
  const quoteData = useSelector((state) => state.quote);
  const isQuoteSettingActive = useSelector((state) => state.settings.generalSettings[4].checked);
  const isTodoSettingActive = useSelector((state) => state.settings.generalSettings[7].checked);
  const toggleToDo = () => {
    todoActive ? setTodoActive(false) : setTodoActive(true);
  };

  const toggleSettings = () => {
    settingsActive ? setSettingsActive(false) : setSettingsActive(true);
  };
  useEffect(() => {
      dispatch(fetchQuotes());
  }, []);

  const refreshQuote = () => {
    dispatch(fetchQuotes());
  };

  return (
    <footer className={s.footer}>
      <Link
        to="settings/general"
        className={s.settingsButton}
        onClick={toggleSettings}
      ></Link>
      <Settings active={settingsActive} setSettingsActive={setSettingsActive} />
      <div className={classNames(s.qoute, isQuoteSettingActive ? '' : s.hidden)}>
        <Refresh className={s.quoteButton}
         onClick={refreshQuote}
          />
        {quoteData.status === "loading" ? (
          <div>{quoteData.status}</div>
        ) : (
          <div>"{quoteData.quote}"</div>
          )}
      </div>
      <div className={classNames(s.todo, isTodoSettingActive ? '' : s.hidden )} onClick={toggleToDo}>
        ToDo
      </div>
      <ToDo active={todoActive} onClick={toggleToDo} />
    </footer>
  );
};

export default React.memo(Footer);
