import React, { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import "./assets/styles/fonts.css";
import "./assets/styles/app.css";
import { Layout } from "./components/layout/layout";
import Landing from "./views/landing";
import AuthView from "./views/authView";
import SearchView from "./views/searchView";
import ResultView from "./views/resultView";
import userInfo from "./store/user";

const useUserInfo = new userInfo();

export const Context = createContext({ useUserInfo });

function App() {
  const loadData = async () => {
    await useUserInfo.checkAuth();
    await useUserInfo.getInfo();
  };
  useEffect(() => {
    loadData();
  },[]);

  return (
    <>
      <Context.Provider value={{ useUserInfo }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<AuthView />} />
            <Route path="search" element={<SearchView />} />
            <Route path="result" element={<ResultView />} />
          </Route>
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
