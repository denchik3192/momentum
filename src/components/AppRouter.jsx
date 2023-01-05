import React from "react";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";
import Momentum from "../pages/Momentum";
import ToDoPage from "../pages/ToDoPage";
import Auth from "./Auth/Auth";
import Settings from "./Footer/Settings/Settings";

function AppRouter() {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <Routes>
      <Route path="/momentum/*" element={<Momentum />}>
        <Route path="settings//*" element={<Settings />} />
      </Route>
      <Route path="/todopage" element={<ToDoPage />} />
      {/* <Route path="/login" element={<Auth />} /> */}
      <Route path="*" element={<Navigate to="/momentum" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
