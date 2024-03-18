import { Link } from "react-router-dom"

export const CatalogueTable = ({userRecords}) => {
    
    return(
        <table className="catalogue-table">
            <thead>
                <tr id="0">
                    <td>Artist</td>
                    <td>Record</td>
                    <td>Year</td>
                    <td>Genre</td>
                    <td>Type</td>
                    <td>Speed</td>
                    <td>Condition</td>
                    <td>Press Location</td>
                    <td>Press Year</td>
                </tr>
            </thead>
            <tbody key="body">
            {userRecords.map((record) => {
                return (
                <tr key={record.id}>
                    <td>{record.artist}</td>
                    <td>{record.recordName}</td>
                    <td>{record.releaseYear}</td>
                    <td>{record.genre.genreName}</td>
                    <td>{record.type.typeName}</td>
                    <td>{record.speed.speedName} RPM</td>
                    <td>{record.condition.conditionName}</td>
                    <td>{record.pressLocation}</td>
                    <td>{record.pressYear}</td>
                    <td>
                        <button>
                            <Link key={record.id} to={`/myCatalogue/${record.id}`}>
                                Edit
                            </Link>
                        </button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>
    )
}