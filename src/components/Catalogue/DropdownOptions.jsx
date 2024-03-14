import { getGenres } from "../auth/Services/genreService.jsx"
import { getTypes } from "../auth/Services/typeService.jsx"
import { getSpeeds } from "../auth/Services/speedService.jsx"
import { getSizes } from "../auth/Services/sizeService.jsx"
import { getConditions } from "../auth/Services/conditionService.jsx"
import { useEffect, useState } from "react"

export const GenreOptions = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        getGenres().then((genres) => {
            setGenres(genres);
        })
    }, [])

    const handleGenreChange = (event) => {
        console.log(event.target.value)
    }


    return (
        <select
            defaultValue="0"
            className="dropdown-select"
            onChange={handleGenreChange}
        >
        <option value="0">None selected</option>
            {genres.map((genre) => {
                return <option key={genre.id} value={genre.id}>{genre.genreName}</option>
            })}
        </select>
    )
}

export const TypeOptions = () => {
    const [types, setTypes] = useState([])
    useEffect(() => {
        getTypes().then((types) => {
                setTypes(types)
        })
    }, [])

    const handleTypeChange = (event) => {
        console.log(event.target.value)
    }
    
    return(
        <select
            defaultValue="0"
            className="dropdown-select"
            onChange={handleTypeChange}
        >
            <option value="0">None selected</option>
            {types.map((type) => {
                return <option key={type.id} value={type.id}>{type.typeName}</option>
            })}
        </select>
)}

    export const SpeedOptions = () => {
    const [speeds, setSpeeds] = useState([])
        useEffect(() => {
            getSpeeds().then((speeds) => {
                setSpeeds(speeds)
            })
        }, [])

        const handleSpeedChange = (event) => {
            console.log(event.target.value)
        }

        return(
            <select
                defaultValue="0"
                className="dropdown-select"
                onChange={handleSpeedChange}
            >
                <option value="0">None selected</option>
                {speeds.map((speed) => {
                    return <option key={speed.id} value={speed.id}>{speed.speedName}</option>
                })}
            </select>
        )
    }

    export const SizeOptions = () => {
    const [sizes, setSizes] = useState([])
        useEffect(() => {
            getSizes().then((sizes) => {
                setSizes(sizes)
            })
        }, [])

        const handleSizeChange = (event) => {
            console.log(event.target.value)
        }

        return(
            <select
                defaultValue="0"
                className="dropdown-select"
                onChange={handleSizeChange}
            >
                <option key="0">None selected</option>
                {sizes.map((size) => {
                    return <option key={size.id} value={size.id}>{size.sizeName}</option>
                })}
            </select>
        )
        
    }

    export const ConditionOptions = () => {
    const [conditions, setConditions] = useState([])
        useEffect(() => {
            getConditions().then((conditions) => {
                setConditions(conditions)
            })
        }, [])

        const handleConditionChange = (event) => {
            console.log(event.target.value)
        }

        return(
            <select
            defaultValue="0"
            className="dropdown-select"
            onChange={handleConditionChange}
            >
                <option key="0">None selected</option>
                {conditions.map((condition) => {
                    return <option key={condition.id} value={condition.id}>{condition.conditionName}</option>
                })}
            </select>
        )
    }