import Table from "./table.tsx"
import Sectionheader from "../../components/sectionheader.tsx"
import { useState, useEffect } from "react"
// import { getProducts } from "@/storage.ts"
import Search from "./search.tsx"
import AddProduct from "./addProduct.tsx"
import { getProducts } from "@/firebaseStorage.ts"
// import { migrateToFirebase } from "@/firebaseStorage.ts"

const Home = () => {
  const [products, setProducts] = useState(getProducts())

  useEffect(() => {
    console.log(getProducts())
  }, [])

  return (
    <>
      <section className="mb-2">
        <Sectionheader>Enter a new product</Sectionheader>
        <AddProduct setProducts={setProducts} />
        {/* <button type="button" onClick={() => migrateToFirebase()} className="border p-2 rounded-xl border-black" >Migrate</button> */}
      </section>

      <section className="mb-2">
        <Sectionheader>View all products</Sectionheader>
        {/* <Search setProducts={setProducts} /> */}
        <Table  />
      </section>
    </>
  )
}

export default Home