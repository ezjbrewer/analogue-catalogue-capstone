import { useState } from "react"
import { GenreOptions, TypeOptions, SpeedOptions, SizeOptions, ConditionOptions } from "./DropdownOptions.jsx"

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
                        <GenreOptions/>
                    </fieldset>
                    <fieldset>
                    <label>Type</label>
                        <TypeOptions/>
                    </fieldset>
                    <fieldset>
                    <label>Speed</label>
                        <SpeedOptions/>
                    </fieldset>
                    <fieldset>
                    <label>Size</label>
                        <SizeOptions/>
                    </fieldset>
                    <fieldset>
                    <label>Condition</label>
                       <ConditionOptions/>
                    </fieldset>
                </div>
                <div className="pressing-input">
                <fieldset>
                        <div>
                            <label>Pressing Location</label>
                            <input
                                className="text-input"
                                placeholder="Pressing Location..."
                            />
                        </div>
                </fieldset>
                <fieldset>
                        <div >
                            <label>Pressing Year</label>
                            <input
                                className="text-input"
                                placeholder="Pressing Year..."
                            />
                        </div>
                </fieldset>
                </div>
                <button>Add Record</button>
            </div>
        </div>
    )
}