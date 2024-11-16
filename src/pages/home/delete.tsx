import { fbDeleteProduct } from "@/firebaseStorage";
import { Trash2 } from "lucide-react"
import toast from "react-hot-toast";
import { IsError } from "types";

const Delete = ({ productId, setError, name }: { productId: string, setError: (isError: IsError) => void, name: string }) => {

    const handleDelete = async () => {
        try {
            console.log(productId)
            await fbDeleteProduct(productId)
            toast.success(`${name} deleted successfully`)
        }
        catch (error) {
            setError({ isError: true, msg: "Failed to delete product" });
            toast.error(`Failed to delete ${name}`)
        } 
    }

    return (
        <div onClick={handleDelete} className="w-6">
            
            <Trash2 color="red" />
        </div>
    )
}

export default Delete
