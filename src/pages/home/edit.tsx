import { EditIcon } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

const Edit = ({ productId, setEditing, setProductId }: { productId: string, setEditing: Dispatch<SetStateAction<boolean>>, setProductId: Dispatch<SetStateAction<string>> }) => {
    const handleEdit = () => {
        setEditing(true)
        setProductId(productId)
    }

    return (
        <div className="" onClick={(event) => {
            event.stopPropagation()
            handleEdit()
        }}>
            <EditIcon color="darkblue" />
        </div>
    )
}

export default Edit