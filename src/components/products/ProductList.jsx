import { ProductCard } from "../../component"

export const ProductList = () =>{
    const productsArray = [
        // { name: "Product_1", price: 100 },
        // { name: "Product_2", price: 200 },
        // { name: "Product_3", price: 300 },
        // { name: "Product_4", price: 400 },
        // { name: "Product_5", price: 500 },
    ]
    return(
         <div className='flex flex-wrap justify-center'>
                {
                    productsArray.map((product) => (
                        <ProductCard name={product.name} price={product.price} />
                    ))
                }
            </div>
    )
}