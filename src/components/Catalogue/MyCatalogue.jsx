import { getRecords } from "../auth/Services/recordService.jsx";
import "./MyCatalogue.css"
import { useEffect, useState } from "react";
import { getGenres } from "../auth/Services/recordService.jsx"
import { CatalogueOptions } from "./CatalogueOptions.jsx";
import { CatalogueTable } from "./CatalogueTable.jsx";


export const MyCatalogue = ({currentUser}) => {
    const [userRecords, setUserRecords] = useState([])
    const [allGenres, setAllGenres] = useState([])
    const [sortedArtists, setSortedArtists] = useState([])
    const [sortDropdownId, setSortDropdownId] = useState(0)

    useEffect(() => {
        getRecords().then((allRecords) => {
            const filteredRecords = allRecords.filter(record => {
                return record.userId === currentUser.id
            })
            setUserRecords(filteredRecords)
        })
    }, [currentUser])

    useEffect(() => {
        getGenres().then((genres) => {
            setAllGenres(allGenres)
        })
    }, [])
    
    return(
        <div className="catalogue">
            <div className="catalogue-header">
                <div className="catalogue-count">
                    <h1>You have {userRecords.length} records in your catalogue!</h1>
                </div>
                <div className="catalogue-options">
                    <CatalogueOptions userRecords={userRecords} setUserRecords={setUserRecords}/>
                    <button>Add a record</button>
                </div>
            </div>
            <div>
                <CatalogueTable userRecords={userRecords}/>
            </div>
        </div>
    )
}