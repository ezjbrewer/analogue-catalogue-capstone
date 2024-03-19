import { useState } from "react"
import { GenreOptions, TypeOptions, SpeedOptions, SizeOptions, ConditionOptions } from "./DropdownOptions.jsx"
import { addRecord } from "../auth/Services/recordService.jsx"
import { useNavigate } from "react-router-dom"


export const NewRecord = ({currentUser}) => {
    const [record, setRecord] = useState({
        artist: "",
        recordName: "",
        releaseYear: "",
        genreId: 0,
        typeId: 0,
        speedId: 0,
        conditionId: 0,
        sizeId: 0,
        pressYear: "",
        pressLocation: ""
    })

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const stateCopy = { ...record }
        stateCopy[event.target.name] = event.target.value
        setRecord(stateCopy)
      }

    const handleRecordSave = () => {
        const newRecord = { ...record }
        newRecord.userId = currentUser.id
        newRecord.pressYear = newRecord.pressYear || "Unknown"
        newRecord.pressLocation = newRecord.pressLocation || "Unknown"
        if (newRecord.artist !== "" || newRecord.recordName !== "" || newRecord.releaseYear !== "") {
            addRecord(newRecord).then(() => {
                navigate("/myCatalogue")
            })
        }
    }

    return(
        <div className="new-record-card">
            <div className="new-record-heading">
                <h1>New Record</h1>
            </div>
            <form className="new-record-form">
                <div>
                    <fieldset className="form-field">
                        <div >
                            <label>Artist</label>
                            <input
                                className="text-input"
                                placeholder="Artist..."
                                name="artist"
                                value={record?.artist ? record.artist : ""}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="form-field">
                        <div>
                            <label>Record Name</label>
                            <input
                                className="text-input"
                                placeholder="Record Name..."
                                name="recordName"
                                value={record?.recordName ? record.recordName : ""}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="form-field">
                        <div>
                            <label>Year</label>
                            <input
                                className="text-input"
                                placeholder="Year..."
                                name="releaseYear"
                                value={record.releaseYear ? record.releaseYear : ""}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="form-field">
                    <label>Genre</label>
                        <GenreOptions handleInputChange={handleInputChange} record={record}/>
                    </fieldset>
                    <fieldset className="form-field">
                    <label>Type</label>
                        <TypeOptions handleInputChange={handleInputChange} record={record}/>
                    </fieldset>
                    <fieldset className="form-field">
                    <label>Speed</label>
                        <SpeedOptions handleInputChange={handleInputChange} record={record}/>
                    </fieldset>
                    <fieldset className="form-field">
                    <label>Size</label>
                        <SizeOptions handleInputChange={handleInputChange} record={record}/>
                    </fieldset>
                    <fieldset className="form-field">
                    <label>Condition</label>
                       <ConditionOptions handleInputChange={handleInputChange} record={record}/>
                    </fieldset>
                </div>
                <div className="pressing-input">
                <fieldset className="form-field">
                        <div>
                            <label>Pressing Location</label>
                            <input
                                className="text-input"
                                placeholder="Pressing Location..."
                                name="pressLocation"
                                value={record?.pressLocation ? record.pressLocation : ""}
                                onChange={handleInputChange}
                            />
                        </div>
                </fieldset>
                <fieldset className="form-field">
                        <div >
                            <label>Pressing Year</label>
                            <input
                                className="text-input"
                                placeholder="Pressing Year..."
                                name="pressYear"
                                value={record?.pressYear  ? record.pressYear : ""}
                                onChange={handleInputChange}
                            />
                        </div>
                </fieldset>
                </div>
                <div className="submit-record-btn">
                    <button type="button" className="submit-btn" onClick={handleRecordSave}>Add Record</button>
                </div>
            </form>
        </div>
    )
}