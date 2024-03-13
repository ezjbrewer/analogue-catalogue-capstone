import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { useState, useEffect } from "react";

export const ApplicationViews = () => {
    const [currentUser, setCurrentUser] = useState({})
  
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("analogue_user")));
  }, [])

  return(
    <Routes>
        <Route
        path="/"
        element={
            <>
            <NavBar/>
            <Outlet/>
            </>
        }
        >
            <Route index element={<Welcome/>} />

        </Route>
    </Routes>
  )
}