import { Routes, Route, Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar.jsx";
import { MyCatalogue } from "../components/Catalogue/MyCatalogue.jsx";
import { Welcome } from "../components/welcome/Welcome.jsx";
import { useState, useEffect } from "react";
import { NewRecord } from "../components/Catalogue/NewRecords.jsx";
import { EditRecord } from "../components/Catalogue/EditRecord.jsx";

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
            <Route path="/myCatalogue">
              <Route index element={<MyCatalogue currentUser={currentUser}/>} />
            </Route>
            <Route path="/newRecord" element={<NewRecord currentUser={currentUser} />} />
            <Route path="/editRecord">
            <Route path=":recordId" element={<EditRecord currentUser={currentUser} />} />
            </Route>
        </Route>
    </Routes>
  )
}
//<Route path="/myCatalogue" element={<MyCatalogue currentUser={currentUser}/>}/> newRecord