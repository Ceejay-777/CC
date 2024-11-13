import Sectionheader from "@/components/sectionheader"
import { useEffect, useState } from "react"

const Calculate = () => {
    const [bulkBuyingPrice, setBulkBuyingPrice] = useState<number>()
    const [bulkSellingPrice, setBulkSellingPrice] = useState<number>()
    const [unitQty, setUnitQty] = useState<number>()

    const [bulkProfit, setBulkProfit] = useState<number>(0)
    const [unitProfit, setUnitProfit] = useState<number>(0)
    const [unitPrice, setUnitPrice] = useState<number>(0)

    useEffect(() => {
        if (bulkBuyingPrice && bulkSellingPrice) {
            setBulkProfit(parseFloat(((bulkSellingPrice - bulkBuyingPrice)).toFixed(2)))
        } else setBulkProfit(0)

        if (bulkBuyingPrice && bulkSellingPrice && unitQty) {
            setUnitProfit(parseFloat(((bulkSellingPrice - bulkBuyingPrice) / unitQty).toFixed(2)))
        } else setUnitProfit(0)

        if (bulkSellingPrice && unitQty) {
            setUnitPrice(parseFloat((bulkSellingPrice / unitQty).toFixed(2)))
        } else setUnitPrice(0)

    }, [bulkBuyingPrice, bulkSellingPrice, unitQty])

    return (
        <div>
            <section>
                <Sectionheader>Calculate Prices Instantly</Sectionheader>

                <div>
                    <div className="mb-4 flex flex-col">
                        <label htmlFor="bulkBuyingPrice" className="text-sm mb-1 font-semibold">Bulk buying price</label>
                        <input type="number" name="bulkBuyingPrice" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0} value={bulkBuyingPrice} onChange={(event) => setBulkBuyingPrice(parseFloat(event.target.value))} />
                    </div>

                    <div className="mb-4 flex flex-col">
                        <label htmlFor="bulkSellingPrice" className="text-sm mb-1 font-semibold">Bulk selling price</label>
                        <input type="number" name="bulkSellingPrice" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter focus:border-black" min={0} value={bulkSellingPrice} onChange={(event) => setBulkSellingPrice(parseFloat(event.target.value))} onFocus={() => console.log("Okay")}/>
                    </div>

                    <div className="mb-4 flex flex-col">
                        <label htmlFor="unitQty" className="text-sm mb-1 font-semibold">Unit Qty</label>
                        <input type="number" name="unitQty" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter w-1/2" min={0} value={unitQty} onChange={(event) => setUnitQty(parseFloat(event.target.value))} />
                    </div>
                </div>
            </section>

            <section>
                <Sectionheader>Results</Sectionheader>
                <div className="text-lg font-semibold flex flex-col gap-4">
                    <div>
                        <label htmlFor="bulkProfit" className="text-lg mb-1 font-semibold text-zinc-700">Bulk Profit: </label>
                        <input type="number" name="bulkProfit" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter w-1/2" min={0} value={bulkProfit} disabled />
                    </div>
                    <div>
                        <label htmlFor="unitProfit" className="text-lg mb-1 font-semibold text-zinc-700">Unit Profit: </label>
                        <input type="number" name="unitProfit" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter w-1/2" min={0} value={unitProfit} disabled />
                    </div>
                    <div>
                        <label htmlFor="unitPrice" className="text-lg mb-1 font-semibold text-zinc-700">Unit Price: </label>
                        <input type="number" name="unitPrice" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter w-1/2" min={0} value={unitPrice} disabled />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculate