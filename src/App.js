import React, { Suspense, useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Loader } from "./components";
import { HomePage, LeaderBoard } from "./pages";
import "./App.css";
import UserDetails from "./contexts/UserContext";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
    });
  }, []);

  return (
    <UserDetails>
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
    </UserDetails>
  );
}

export default App;
