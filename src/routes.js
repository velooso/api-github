import React from "react";
import { Routes , Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import RepositoriesPage from "./pages/RepositoriesPage"

 export function AppRoutes() {
  return (
       <Routes>
        <Route path="/:login/repositories" element= {<RepositoriesPage />}/>
        <Route exact path="/" element= {<MainPage />} />
      </Routes>
  );
}
