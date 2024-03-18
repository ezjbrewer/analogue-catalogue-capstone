import { getGenres } from "../auth/Services/genreService.jsx"
import { getTypes } from "../auth/Services/typeService.jsx"
import { getSpeeds } from "../auth/Services/speedService.jsx"
import { getSizes } from "../auth/Services/sizeService.jsx"
import { getConditions } from "../auth/Services/conditionService.jsx"
import { useEffect, useState } from "react"

export const GenreOptionsEdit = ({handleInputChange, record}) => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        getGenres().then((genres) => {
            setGenres(genres);
        })
    }, [])

    const handleGenreChange = (event) => {
        const selectedGenreId = parseInt(event.target.value);
        handleInputChange({
            target: {
            name: "genreId",
            value: selectedGenreId
            }
        })
    }

    return (
        <select
            value={record.genreId}
            className="dropdown-select"
            onChange={handleGenreChange}
        >
            {genres.map((genre) => {
                return <option key={genre.id} value={genre.id} name="genreId">{genre.genreName}</option>
            })}
        </select>
    )
}

    export const TypeOptionsEdit = ({handleInputChange, record}) => {
        const [types, setTypes] = useState([])
        useEffect(() => {
            getTypes().then((types) => {
                    setTypes(types)
            })
        }, [])

        const handleTypeChange = (event) => {
            const selectedTypeId = parseInt(event.target.value);
            handleInputChange({
                target: {
                name: "typeId",
                value: selectedTypeId
                }
            })
        }
    
    return(
        <select
            value={record.typeId}
            className="dropdown-select"
            onChange={handleTypeChange}
        >
            {types.map((type) => {
                return <option key={type.id} value={type.id} name="typeId">{type.typeName}</option>
            })}
        </select>
)}

    export const SpeedOptionsEdit = ({handleInputChange, record}) => {
    const [speeds, setSpeeds] = useState([])
        useEffect(() => {
            getSpeeds().then((speeds) => {
                setSpeeds(speeds)
            })
        }, [])

        const handleSpeedChange = (event) => {
            const selectedSpeedId = parseInt(event.target.value);
            handleInputChange({
                target: {
                name: "speedId",
                value: selectedSpeedId
                }
            })
        }

        return(
            <select
                value={record.speedId}
                className="dropdown-select"
                onChange={handleSpeedChange}
            >
                {speeds.map((speed) => {
                    return <option key={speed.id} value={speed.id} name="speedId">{speed.speedName} RPM</option>
                })}
            </select>
        )
    }

    export const SizeOptionsEdit = ({handleInputChange, record}) => {
    const [sizes, setSizes] = useState([])
        useEffect(() => {
            getSizes().then((sizes) => {
                setSizes(sizes)
            })
        }, [])

        const handleSizeChange = (event) => {
            const selectedSizeId = parseInt(event.target.value);
            handleInputChange({
                target: {
                name: "sizeId",
                value: selectedSizeId
                }
            })
        }

        return(
            <select
                value={record.speedId}
                className="dropdown-select"
                onChange={handleSizeChange}
            >
                {sizes.map((size) => {
                    return <option key={size.id} value={size.id} name="">{size.sizeName}</option>
                })}
            </select>
        )
        
    }

    export const ConditionOptionsEdit = ({handleInputChange, record}) => {
    const [conditions, setConditions] = useState([])
        useEffect(() => {
            getConditions().then((conditions) => {
                setConditions(conditions)
            })
        }, [])

        const handleConditionChange = (event) => {
            const selectedConditionId = parseInt(event.target.value);
            handleInputChange({
                target: {
                name: "conditionId",
                value: selectedConditionId
                }
            })
        }

        return(
            <select
            value={record.conditionId}
            className="dropdown-select"
            onChange={handleConditionChange}
            >
                {conditions.map((condition) => {
                    return <option key={condition.id} value={condition.id}>{condition.conditionName}</option>
                })}
            </select>
        )
    }