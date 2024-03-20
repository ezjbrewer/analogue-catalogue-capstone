import { getRecords } from "../auth/Services/recordService.jsx";
import "./MyCatalogue.css"
import { useEffect, useState } from "react";
import { CatalogueOptions } from "./CatalogueOptions.jsx";
import { CatalogueTable } from "./CatalogueTable.jsx";
import { useNavigate } from "react-router-dom";


export const MyCatalogue = ({currentUser}) => {
    const [userRecords, setUserRecords] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getRecords().then((allRecords) => {
            const filteredRecords = allRecords.filter(record => {
                return record.userId === currentUser.id
            })
            setUserRecords(filteredRecords)
        })
    }, [currentUser])

    return(
        <div className="catalogue">
            <div className="catalogue-header">
                <div className="catalogue-count">
                    <h1>You have {userRecords.length} records in your catalogue!</h1>
                </div>
                <div className="catalogue-options">
                    <button className="add-record-btn" onClick={() => navigate("/newRecord")}>Add a record</button>
                    <CatalogueOptions key={userRecords.id} userRecords={userRecords} setUserRecords={setUserRecords} currentUser={currentUser}/>
                </div>
            </div>
            <div>
                <CatalogueTable key={userRecords.id} userRecords={userRecords}/>
            </div>
        </div>
    )
}