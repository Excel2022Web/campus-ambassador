import React, { Suspense, useEffect, useState } from 'react'
import AOS from 'aos';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { Navbar, Loader } from "./components";
import { HomePage, LeaderBoard } from './pages'
import AuthHandler from './auth/authHandler';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, [])
 
  useEffect(() => {
    let index = window.location.href.indexOf("?");
    const searchString = window.location.href.slice(index);
    const urlParams = new URLSearchParams(searchString);
    const refreshToken = urlParams.get("refreshToken");
    if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
    AuthHandler.aysncGetAccessToken(refreshToken);
    if (index >= 0) {
      window.open(window.location.href.slice(0, index), "_self");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
            
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
