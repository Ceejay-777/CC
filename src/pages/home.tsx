import Table from "../components/table"
import {products} from "../../data.ts"

const Home = () => {
  return (
    <div className="p-6 min-h-screen">
      <div className="mb-4">
        <label htmlFor="product"></label>
        <input type="text" name="product" placeholder="New Product" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter"/>
      </div>

      <div className="mb-4">
        <label htmlFor="product"></label>
        <input type="number" name="product" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0}/>
      </div>

      <button className="bg-black rounded-xl p-3">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="white" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>

      <Table tableData={products}/>
    </div>
  )
}

export default Home