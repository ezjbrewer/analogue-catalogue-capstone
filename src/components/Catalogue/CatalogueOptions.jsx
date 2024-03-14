import { useEffect, useState } from "react"
import { getRecords } from "../auth/Services/recordService.jsx"

export const CatalogueOptions = ({userRecords, setUserRecords, currentUser}) => {
    
    const [unsortedRecords, setUnsortedRecords] = useState([])

    useEffect(() => {
      getRecords().then((allRecords) => {
          const filteredRecords = allRecords.filter(record => {
              return record.userId === currentUser.id
          })
          setUnsortedRecords(filteredRecords)
      })
  }, [currentUser])

    const sortByGenre = () => {
        const sortedRecords = [...userRecords].sort(function (a, b) {
            if (a.genre.genreName < b.genre.genreName) {
              return -1
            }
            if (a.genre.genreName > b.genre.genreName) {
              return 1
            }
            return 0
          })
        setUserRecords(sortedRecords)
      }
    
    const sortByArtist = () => {
      const sortedRecords = [...userRecords].sort(function (a, b) {
            if (a.artist < b.artist) {
              return -1
            }
            if (a.artist > b.artist) {
              return 1
            }
            return 0
          })
        setUserRecords(sortedRecords)
    }

    const handleSorting = (e) => {
        const value = parseInt(e.target.value)
        if (value === 1) {
            sortByArtist()
        } else if (value === 2) {
            sortByGenre()
        } else if (value === 0) {
          setUserRecords(unsortedRecords)
        }
    }
    
    return(
        <div>
            <select
                defaultValue="0"
                onChange={handleSorting}
            >
                <option value="0">Sort by...</option>
                <option value="1">Artist(A to Z)</option>
                <option value="2">Genre (A to Z)</option>
            </select>
        </div>
    )
}