import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar.jsx";
import { MyCatalogue } from "../components/Catalogue/MyCatalogue.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { useState, useEffect } from "react";
import { NewRecord } from "../components/Catalogue/NewRecords.jsx";
import { EditRecord } from "../components/Catalogue/EditRecord.jsx";
import { Profile } from "../components/profile/profile.jsx";
import { EditProfile } from "../components/profile/editProfile.jsx";
import { Home } from "../components/Home/Home.jsx";

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
            <Route path="/home">
              <Route index element={<Home currentUser={currentUser}/>} />
            </Route>
            <Route path="/myCatalogue">
              <Route index element={<MyCatalogue currentUser={currentUser}/>} />
            </Route>
            <Route path="/newRecord" element={<NewRecord currentUser={currentUser} />} />
            <Route path="/editRecord">
              <Route path=":recordId" element={<EditRecord currentUser={currentUser} />} />
            </Route>

            <Route path="/profile">
              <Route index element={<Profile currentUser={currentUser}/>} />
            </Route>

            <Route path="/editProfile">
                <Route index element={<EditProfile currentUser={currentUser} />}/>  
            </Route>
        </Route>
    </Routes>
  )
}