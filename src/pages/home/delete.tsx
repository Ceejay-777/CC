import { fbDeleteProduct } from "@/firebaseStorage";
import { Trash2 } from "lucide-react"
import { IsError } from "types";

const Delete = ({ productId, setError }: { productId: string, setError: (isError: IsError) => void }) => {

    // const refreshProducts = async () => {
    //     const data = await getProducts();
    //     setProducts(data);
    // };

    const handleDelete = async () => {
        try {
            console.log(productId)
            await fbDeleteProduct(productId)
        }
        catch (error) {
            setError({ isError: true, msg: "Failed to delete product" });
        } 
    }

    return (
        <div onClick={handleDelete} className="w-6">
            {/* {isLoading ? <div className="animate-spin">
                <Loader2 color="red"/>
            </div> :
            } */}
            <Trash2 color="red" />
        </div>
    )
}

export default Delete
