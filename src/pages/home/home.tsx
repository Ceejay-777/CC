import Table from "./table.tsx"
import Sectionheader from "../../components/sectionheader.tsx"
import AddProduct from "./addProduct.tsx"

const Home = () => {

  return (
    <div className="mb-14">
      <section className="mb-2">
        <Sectionheader>Enter a new product</Sectionheader>
        <AddProduct />
      </section>

      <section className="mb-2">
        <Sectionheader>View all products</Sectionheader>
        <Table />
      </section>
    </div>
  )
}

export default Home