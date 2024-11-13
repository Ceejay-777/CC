import { deleteProduct } from "@/firebaseStorage";
import { Loader2, Trash2 } from "lucide-react"
import { useState } from "react";
import { IsError } from "types";

const Delete = ({ productId, setError }: { productId: string, setError: (isError: IsError) => void }) => {
    const [isLoading, setLoading] = useState(false)

    // const refreshProducts = async () => {
    //     const data = await getProducts();
    //     setProducts(data);
    // };

    const handleDelete = async () => {
        setLoading(true)
        try {console.log(productId)
        await deleteProduct(productId)
    }
        catch (error) {
            setError({ isError: true, msg: "Failed to delete product" });
        } finally {setLoading(false)}
    }

    return (
        <div onClick={handleDelete} className="w-6">
            {isLoading ? <div className="animate-spin">
                <Loader2 color="red"/>
            </div> :
            <Trash2 color="red"/>}
        </div>
    )
}

export default Delete
