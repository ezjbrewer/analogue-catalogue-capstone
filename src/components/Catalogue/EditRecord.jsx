import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getRecordById } from "../auth/Services/recordService.jsx"
import { ConditionOptionsEdit, GenreOptionsEdit, SizeOptionsEdit, SpeedOptionsEdit, TypeOptionsEdit } from "./DropdownOptionsEdit.jsx"
import { updateRecord } from "../auth/Services/recordService.jsx"
import { useNavigate } from "react-router-dom"
import { deleteRecord } from "../auth/Services/recordService.jsx"


export const EditRecord = ({currentUser}) => {
    const { recordId } = useParams()
    const [record, setRecord] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getRecordById(recordId).then((data) => {
            const recordObj = data
            if (data.userId === currentUser.id) {
                setRecord(recordObj)
            } else {
                navigate("/myCatalogue")
            }
        })
    }, [recordId])
    
    const handleInputChange = (event) => {
        const stateCopy = { ...record }
        stateCopy[event.target.name] = event.target.value
        setRecord(stateCopy)
    }

    const handleRecordUpdate = () => {
        const editRecord = { ...record }
        editRecord.userId = currentUser.id
        editRecord.pressYear = editRecord.pressYear || "Unknown"
        editRecord.pressLocation = editRecord.pressLocation || "Unknown"
        if (editRecord.artist !== "" || editRecord.recordName !== "" || editRecord.releaseYear !== "") {
            updateRecord(editRecord).then(() => {
                navigate("/myCatalogue")
            })
        }
    }

    const handleRecordDelete = () => {
        deleteRecord(record.id).then(() => {
            navigate("/myCatalogue")
        })
    }

        return(
            <div className="new-record-card">
                <div className="new-record-heading">
                    <h1>Edit Record</h1>
                </div>
                <form className="new-record-form">
                    <div>
                        <fieldset>
                            <div >
                                <label>Artist</label>
                                <input
                                    className="text-input"
                                    name="artist"
                                    value={record?.artist ? record.artist : ""}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label>Record Name</label>
                                <input
                                    className="text-input"
                                    name="recordName"
                                    value={record?.recordName ? record.recordName : ""}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                            <div>
                                <label>Year</label>
                                <input
                                    className="text-input"
                                    name="releaseYear"
                                    value={record.releaseYear ? record.releaseYear : ""}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </fieldset>
                        <fieldset>
                        <label>Genre</label>
                            <GenreOptionsEdit handleInputChange={handleInputChange} record={record}/>
                        </fieldset>
                        <fieldset>
                        <label>Type</label>
                            <TypeOptionsEdit handleInputChange={handleInputChange} record={record}/>
                        </fieldset>
                        <fieldset>
                        <label>Speed</label>
                            <SpeedOptionsEdit handleInputChange={handleInputChange} record={record}/>
                        </fieldset>
                        <fieldset>
                        <label>Size</label>
                            <SizeOptionsEdit handleInputChange={handleInputChange} record={record}/>
                        </fieldset>
                        <fieldset>
                        <label>Condition</label>
                           <ConditionOptionsEdit handleInputChange={handleInputChange} record={record}/>
                        </fieldset>
                    </div>
                    <div className="pressing-input">
                    <fieldset>
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
                    <fieldset>
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
                    <div>
                        <button type="button" onClick={handleRecordDelete}>Delete record</button>
                        <button type="button" onClick={handleRecordUpdate}>Save Changes</button>
                    </div>
                </form>
            </div>
        )
    }