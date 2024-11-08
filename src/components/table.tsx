import {ProductDetail} from "../../types.ts"

// type TableProps = {
//     tableData: ProductDetail[]; // Specifies that tableData is an array of ProductDetail
// };

const Table = ({tableData}: {tableData: ProductDetail[]}) => {
  return (
    <div className="border rounded-xl p-6 font-semibold last-of-type:mb-0">
        <div className="grid grid-cols-[auto_2fr_1fr] w-full pb-2 border-b-2 mb-2 text-zinc-500">
              <p className="w-8 text-zinc-500">#</p>
            <p>Product</p>
            <p>Price</p>
        </div>
        {tableData.map((data, index) => {
            return (
                <div className="grid grid-cols-[auto_2fr_1fr] w-full py-3 border-b font-semibold gap-x-2" key={index}>
                    <p className="w-8 text-zinc-500">{index + 1}</p>
                    <p>{data.name}</p>
                    <p className="tracking-tighter"><span className="text-zinc-700">#</span>{data.price}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Table