import React from "react"
import { ProductDetail } from "../../types.ts"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu.tsx"

// type TableProps = {
//     tableData: ProductDetail[]; // Specifies that tableData is an array of ProductDetail
// };

const Table = ({ tableData }: { tableData: ProductDetail[] }) => {

    return (
        <div className="border rounded-xl p-6 font-semibold">
            <div className="grid grid-cols-[auto_2fr_1fr_auto] w-full pb-2 border-b-2 mb-2 text-zinc-500">
                <p className="w-8 text-zinc-500">#</p>
                <p>Product</p>
                <p>Price</p>
                <p>Opt</p>
            </div>
            {tableData.map((data, index) => {
                return (
                    <div className="grid grid-cols-[auto_2fr_1fr_auto] items-center w-full py-3 border-b font-semibold gap-x-2 last:border-b-0" key={index}>
                        <p className="w-8 text-zinc-500">{index + 1}</p>
                        <p>{data.name}</p>
                        <p className="tracking-tighter font-mono"><span className="text-zinc-700">#</span>{data.price}</p>
                        <Options />
                    </div>
                )
            })}
        </div>
    )
}

const Options = () => {
    // const [open, setOpen] = React.useState(false)

    return (
        <div className="flex">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="darkBlue" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>
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