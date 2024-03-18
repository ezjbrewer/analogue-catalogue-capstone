import { useParams } from "react-router-dom"

export const EditRecord = () => {
    const {recordId} = useParams()
    
    return(
        <div>
            You should be able to see this rendered
        </div>
    )
}