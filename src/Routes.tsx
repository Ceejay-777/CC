import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import SharedLayout from "./pages/sharedLayout";
import Calculate from "./pages/calculate";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/calculate" element={<Calculate />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default MyRoutes