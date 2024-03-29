import { Refresh } from "@mui/icons-material";
import classNames from "classnames";
import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchQuotes } from "../../reduxTK/quoteSlice";
import s from "./footer.module.scss";
// import Settings from "./Settings/Settings";
// import ToDo from "./todo/ToDo";

const SettingsComponent = lazy(() => import("./Settings/Settings"));
const ToDoComponent = lazy(() => import("./todo/ToDo"));

const Footer = (props) => {
  const [todoActive, setTodoActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const dispatch = useDispatch();
  const quoteData = useSelector((state) => state.quote);
  const isQuoteSettingActive = useSelector(
    (state) => state.settings.generalSettings[4].checked
  );
  const isTodoSettingActive = useSelector(
    (state) => state.settings.generalSettings[7].checked
  );
  const toggleToDo = () => {
    todoActive ? setTodoActive(false) : setTodoActive(true);
  };

  const toggleSettings = () => {
    settingsActive ? setSettingsActive(false) : setSettingsActive(true);
  };
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  const refreshQuote = () => {
    dispatch(fetchQuotes());
  };

  console.log("footer render");
  return (
    <footer className={s.footer}>
      <Link
        to="settings/general"
        className={s.settingsButton}
        onClick={toggleSettings}
      ></Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <SettingsComponent
          active={settingsActive}
          setSettingsActive={setSettingsActive}
        />
      </Suspense>

      <div
        className={classNames(s.qoute, isQuoteSettingActive ? "" : s.hidden)}
      >
        <Refresh className={s.quoteButton} onClick={refreshQuote} />
        {quoteData.status === "loading" ? (
          <div>{quoteData.status}</div>
        ) : (
          <div>"{quoteData.quote}"</div>
        )}
      </div>
      <div
        className={classNames(s.todo, isTodoSettingActive ? "" : s.hidden)}
        onClick={toggleToDo}
      >
        ToDo
      </div>
      <Suspense>
        <ToDoComponent active={todoActive} onClick={toggleToDo} />
      </Suspense>
    </footer>
  );
};

export default React.memo(Footer);
