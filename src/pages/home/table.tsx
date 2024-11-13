// import { deleteProduct, getProducts } from "@/storage.ts"
import { SavedProductDetail } from "../../../types.ts"
import { SetStateAction, useEffect, useState, Dispatch } from "react"
import EditOverlay from "../../components/editOverlay.tsx"
import { deleteProduct, getProducts } from "@/firebaseStorage.ts"
import Delete from "./delete.tsx"
import { onSnapshot, orderBy, query } from "firebase/firestore"
import { productsRef } from "@/firebase.ts"
import { Edit2, Edit3, EditIcon } from "lucide-react"

const Table = () => {
    const [products, setProducts] = useState<SavedProductDetail[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<{ isError: Boolean, msg: string } | null>({ isError: false, msg: "" });
    const [editing, setEditing] = useState(false)
    const [productId, setProductId] = useState("")


    useEffect(() => {
        console.log("Okay")
        loadProducts()
    }, [])

    useEffect(() => {
        // Set up real-time listener
        const unsubscribe = onSnapshot(
            query(productsRef, orderBy('createdAt', 'desc')),
            (snapshot) => {
                const updatedProducts = snapshot.docs.map(doc => ({
                    ...(doc.data() as SavedProductDetail),
                    id: doc.id
                }));
                setProducts(updatedProducts);
            },
            (error) => {
                setError({ isError: true, msg: 'Failed to load products' });
            }
        );

        // Cleanup listener on unmount
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!editing) {
            // setProducts(getProducts())
        }
    }, [editing])

    const loadProducts = async () => {
        try {
            const data = await getProducts()
            setProducts(data)
        } catch (error) {
            console.log(error)
            setError({ isError: true, msg: 'Failed to load products, please check your internet connection' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="border rounded-xl p-6 font-semibold max-w-[720px] mx-auto">
            <div className="grid grid-cols-[1fr_auto_3fr_2fr_auto] w-full pb-2 border-b-2 mb-2 text-zinc-500 gap-x-2">
                <div className="w-6"></div>
                <p className="w-4 text-zinc-500">#</p>
                <p>Product</p>
                <p>Price</p>
                <p className="text-center">Edit</p>
            </div>
            {isLoading && <div>Loading products...</div>}
            {error?.isError && <div>{error.msg}</div>}
            {!isLoading && !error?.isError && products.map((product, index) => {
                if (products[0]) {
                    return (
                        <div className="grid grid-cols-[1fr_auto_3fr_2fr_auto] items-center w-full py-3 border-b font-semibold gap-x-2 last:border-b-0" key={index}>
                            <Delete productId={product.id} setError={setError}/>
                            <p className="text-zinc-500 w-4">{index + 1}</p>
                            <p>{product.name}</p>
                            <p className="tracking-tighter font-mono"><span
                                className="text-zinc-600">#</span>{product.price}</p>
                            <Edit productId={product.id} setEditing={setEditing} setProductId={setProductId} />
                            {(editing && product.id === productId) && <EditOverlay setEditing={setEditing} productId={product.id} />}
                        </div>
                    )
                }

            })}


        </div>
    )
}

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

{/* <DropdownMenu open={open} onOpenChange={setOpen}>
                            <DropdownMenuTrigger asChild>
                                
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-[120px]">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        Edit
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        Delete
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu> */}

export default Table