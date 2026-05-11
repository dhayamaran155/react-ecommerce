import { Link, Outlet } from "react-router-dom"
import { ProductCard, ProductCardNew } from "../../component"
import { useEffect, useState } from "react"
import axios from "axios";
import { Header } from '../Header'


export const Dashboard = () => {

    const [productList, setProductList] = useState([]);

    async function getProducts() {
        await axios.get("https://dummyjson.com/products").then((res) => {
            const data = res.data;
            console.log(data)
            console.log(data.products);
            setProductList(data?.products)
        })
    }


    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
             <Header />
            <Outlet />
            {/* <h1>Product Dashboard</h1> */}
            <div className="grid grid-cols-5 gap-3 p-4">
                {
                    productList.map((product) => (
                        <ProductCardNew product={product} />
                    ))
                }
                </div>
            {/* <Link className="text-blue-500 underline mx-2" to="productList">Product List</Link>
            <Link className="text-blue-500 underline mx-2"  to="productPreview">Product Preview</Link> */}
            
                   

        </div>
    )
}