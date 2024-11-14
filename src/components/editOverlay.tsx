import {  fbUpdatePrice } from "@/firebaseStorage"
import { Dispatch, SetStateAction, useState } from "react"

const EditOverlay = ({ setEditing, productId, productName, productPrice }: { setEditing: Dispatch<SetStateAction<boolean>>, productId: string, productName:string, productPrice:number }) => {
    const [name, setName] = useState(productName)
    const [price, setPrice] = useState(productPrice)

    const handleUpdate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault()
        fbUpdatePrice(productId, name, price)
        setEditing(false)
    }

    return (
        <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-zinc-900/50 p-8 z-50' onClick={(event) => {
            event.stopPropagation()
            setEditing(false)
        }}>
            <div className="flex gap-4 w-full justify-between items-center py-8 px-4 bg-white rounded-xl flex-wrap" onClick={(event) => {
                event.stopPropagation()
            }}>
                <div className="mx-auto">
                    <div className="mb-4">
                        <label htmlFor="product"></label>
                        <input type="text" name="product" placeholder="Edit Product" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" onChange={(event) => setName(event.target.value)} value={name} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="product"></label>
                        <input type="number" name="product" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0}  onChange={(event) => setPrice(parseInt(event.target.value))} value={price}/>
                    </div>
                </div>

                <button className="bg-black rounded-xl p-3 h-fit w-fit self-start" onClick={(event) => {
                    handleUpdate(event)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default EditOverlay