import Table from "./table.tsx"
import Sectionheader from "../../components/sectionheader.tsx"
// import Search from "./search.tsx"
import AddProduct from "./addProduct.tsx"
// import { migrateToFirebase } from "@/firebaseStorage.ts"

const Home = () => {

  return (
    <div className="mb-14">
      <section className="mb-2">
        <Sectionheader>Enter a new product</Sectionheader>
        <AddProduct />
        {/* <button type="button" onClick={() => migrateToFirebase()} className="border p-2 rounded-xl border-black" >Migrate</button> */}
      </section>

      <section className="mb-2">
        <Sectionheader>View all products</Sectionheader>
        <Table />
      </section>
    </div>
  )
}

export default Home