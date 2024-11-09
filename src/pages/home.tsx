import Table from "../components/table"
import Sectionheader from "../components/sectionheader.tsx"
import { useEffect, useState } from "react"
import { addProduct, getProducts } from "@/storage.ts"

const Home = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [products, setProducts] = useState(getProducts())

  const handleAddProduct = () => {
    console.log(name, price)
    if (name && price) {
      const product = { name, price: parseFloat(price) }
      addProduct(product)
      setProducts(getProducts())
      setName('')
      setPrice('')
    }
  }

  useEffect(() => {
    // addData()
  })

  return (
    <div>
      <div className="p-6 min-h-screen">
        <section className="mb-2">
          <Sectionheader>Enter a new product</Sectionheader>
          <div className="flex w-full justify-around items-center">
            <div>
              <div className="mb-4">
                <label htmlFor="product"></label>
                <input type="text" name="product" placeholder="New Product" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" value={name} onChange={(event) => setName(event.target.value)} />
              </div>

              <div className="mb-4">
                <label htmlFor="product"></label>
                <input type="number" name="product" placeholder="0.00" className="border-black border h-12 rounded-lg p-2 text-zinc-800 placeholder:text-zinc-500 font-semibold tracking-tighter" min={0} value={price} onChange={(event) => setPrice(event.target.value)} />
              </div>
            </div>

            <button className="bg-black rounded-xl p-3 h-fit w-fit self-start"  onClick={() => handleAddProduct()}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>
        </section>

        <section className="mb-2">
          <Sectionheader>View all products</Sectionheader>
          <Table tableData={products} />
        </section>
      </div>
    </div>
  )
}

export default Home