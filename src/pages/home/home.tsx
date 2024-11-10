import Table from "./table.tsx"
import Sectionheader from "../../components/sectionheader.tsx"
import { useState } from "react"
import { getProducts } from "@/storage.ts"
import Search from "./search.tsx"
import AddProduct from "./addProduct.tsx"

const Home = () => {
  const [products, setProducts] = useState(getProducts())

  return (
    <div className="p-6 min-h-screen">
      <section className="mb-2">
        <Sectionheader>Enter a new product</Sectionheader>
        <AddProduct setProducts={setProducts} />
      </section>

      <section className="mb-2">
        <Sectionheader>View all products</Sectionheader>
        <Search setProducts={setProducts} />
        <Table tableData={products} />
      </section>
    </div>
  )
}

export default Home