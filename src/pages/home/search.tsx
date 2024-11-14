import { fbGetProducts, fbSearchProducts } from "@/firebaseStorage"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { SavedProductDetail } from "types"

const Search = ({ setProducts }: {setProducts: Dispatch<SetStateAction<SavedProductDetail[]>> }) => {
    const [query, setQuery] = useState('')

    const handleSearch = async () => {
        if (query) {
            console.log(query)
            const searchResults = await fbSearchProducts(query)
            setProducts(searchResults)
        }
        else {
            console.log("Okay")
            setProducts(await fbGetProducts())
        }
    }

    useEffect(() => {
        handleSearch()
    }, [query])

    return (
        <div className="mb-4 flex flex-col max-w-[320px]">
            <label htmlFor="search" className="text-xs mb-1">Search for a product</label>
            <input type="text" name="search" placeholder="Search" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" value={query} onChange={(event) => {
                if (event.target.value !== " ") {
                    setQuery(event.target.value)
                }
            }} />
        </div>
    )
}

export default Search