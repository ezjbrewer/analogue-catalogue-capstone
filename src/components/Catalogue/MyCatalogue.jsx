import { getRecords } from "../auth/Services/recordService.jsx";
import "./MyCatalogue.css"
import { useEffect, useState } from "react";

export const MyCatalogue = ({currentUser}) => {
    const [userRecords, setUserRecords] = useState([])

    useEffect(() => {
        getRecords().then((allRecords) => {
            const filteredRecords = allRecords.filter(record => {
                return record.userId === currentUser.id
            })
            setUserRecords(filteredRecords)
        })
    }, [currentUser])
    
    return console.log(currentUser.id)
}