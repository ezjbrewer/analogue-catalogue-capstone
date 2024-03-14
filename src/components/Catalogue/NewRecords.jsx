import { useState } from "react"

export const NewRecord = ({currentUser}) => {
    const [record, setRecord] = useState({
        userId: currentUser.id
    })
    
    return(
        <div className="new-record-card">
            <div className="new-record-heading">
                <h1>New Record</h1>
            </div>
            <div className="new-record-field">
                <div>
                    <fieldset>
                        <div >
                            <label>Artist</label>
                            <input
                                className="text-input"
                                placeholder="Artist..."
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label>Record Name</label>
                            <input
                                className="text-input"
                                placeholder="Record Name..."
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label>Year</label>
                            <input
                                className="text-input"
                                placeholder="Year......"
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                    <label>Genre</label>
                        <select
                            defaultValue="0"
                            className="dropdown-select"
                        >
                            <option value="0">Genre...</option>
                        </select>
                    </fieldset>
                    <fieldset>
                    <label>Type</label>
                        <select
                            defaultValue="0"
                            className="dropdown-select"
                        >
                            <option value="0">Type...</option>
                        </select>
                    </fieldset>
                    <fieldset>
                    <label>Speed</label>
                        <select
                            defaultValue="0"
                            className="dropdown-select"
                        >
                            <option value="0">Speed...</option>
                        </select>
                    </fieldset>
                    <fieldset>
                    <label>Size</label>
                        <select
                            defaultValue="0"
                            className="dropdown-select"
                        >
                            <option value="0">Size...</option>
                        </select>
                    </fieldset>
                    <fieldset>
                    <label>Condition</label>
                        <select
                            defaultValue="0"
                            className="dropdown-select"
                        >
                            <option value="0">Condition...</option>
                        </select>
                    </fieldset>
                </div>
            </div>
        </div>
    )
}