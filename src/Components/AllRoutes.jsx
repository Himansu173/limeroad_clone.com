import { Routes, Route } from "react-router-dom"
import Login from "./Login/Login"
import Homepage from "../Pages/Homepage"
import Products from "../Pages/Product Page/Products"
import SingleProductPage from "../Pages/SingleProductPage"
import Cart from "./Cart/Cart"

function AllRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<SingleProductPage />} />
            <Route exact path="/cart" element={<Cart />} />
        </Routes>
    )
}

export default AllRoutes