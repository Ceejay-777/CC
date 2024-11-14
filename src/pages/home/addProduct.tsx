import { fbAddProduct } from '@/firebaseStorage'
import { useState } from 'react'
import toast from 'react-hot-toast'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")

    const handleAddProduct = async () => {
        if (name && price) {
            const product = { name, price: parseFloat(price) }
            fbAddProduct(product)
            toast.success("Product added successfully")
            setName('')
            setPrice('')
        }
    }
    return (
        <div className="flex w-full justify-around items-center flex-wrap">
            <div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="product" className="text-xs mb-1">Product name</label>
                    <input type="text" name="product" placeholder="New Product" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" value={name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="price" className="text-xs mb-1">Price of product</label>
                    <input type="number" name="price" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0} value={price} onChange={(event) => setPrice(event.target.value)} />
                </div>
            </div>

            <button className="bg-black rounded-xl p-3 h-fit w-fit" onClick={() => handleAddProduct()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default AddProduct