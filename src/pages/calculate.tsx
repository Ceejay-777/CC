import Sectionheader from "@/components/sectionheader"
import { useState } from "react"

const Calculate = () => {
    const [bulkBuyingPrice, setBulkBuyingPrice] = useState<number>()
    const [bulkSellingPrice, setBulkSellingPrice] = useState<number>()
    const [unitQty, setUnitQty] = useState<number>()
    // const [buyingPrice, setBuyingPrice] = useState()
    return (
        <div>
            <section>
                <Sectionheader>Calculate Prices Instantly</Sectionheader>

                <div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="price" className="text-sm mb-1 font-semibold">Bulk buying price</label>
                        <input type="number" name="price" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0} value={bulkBuyingPrice} onChange={(event) => setBulkBuyingPrice(parseFloat(event.target.value))} />
                    </div>

                    <div className="mb-4 flex flex-col">
                        <label htmlFor="price" className="text-sm mb-1 font-semibold">Bulk selling price</label>
                        <input type="number" name="price" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0} value={bulkSellingPrice} onChange={(event) => setBulkSellingPrice(parseFloat(event.target.value))} />
                    </div>

                    <div className="mb-4 flex flex-col">
                        <label htmlFor="price" className="text-sm mb-1 font-semibold">Unit Qty</label>
                        <input type="number" name="price" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter w-1/2" min={0} value={unitQty} onChange={(event) => setUnitQty(parseFloat(event.target.value))} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculate