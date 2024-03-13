export const CatalogueOptions = ({userRecords, setUserRecords}) => {
    
    const sortByGenre = () => {
        userRecords.sort(function (a, b) {
            if (a.genre.genreName < b.genre.genreName) {
              return -1
            }
            if (a.genre.genreName > b.genre.genreName) {
              return 1
            }
            return 0
          })
        setUserRecords(userRecords)
    }
    
    const sortByArtist = () => {
        userRecords.sort(function (a, b) {
            if (a.artist < b.artist) {
              return -1
            }
            if (a.artist > b.artist) {
              return 1
            }
            return 0
          })
        setUserRecords(userRecords)
    }

    const handleSorting = (e) => {
        const value = parseInt(e.target.value)
        if (value === 1) {
            sortByArtist()
        } else if (value === 2) {
            sortByGenre()
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