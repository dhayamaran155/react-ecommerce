import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { decrement, increment } from "./stores/counter"
import { setUserName } from "./stores/user"

export const UserCard = ({ name, email }) => {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <Link
      to={`productPreview/${name}/${price}`}
      className="m-2 border p-4 rounded-lg shadow-md w-[150px] h-[200px]"
    >
      <div>
        <img
          src="/logo512.png"
          alt="no-image"
          srcSet=""
          height={100}
          width={100}
        />
      </div>

      <div>
        <p className="font-semibold text-sm">{name}</p>
      </div>

      <div className="font-medium text-xs">
        From {price}
      </div>
    </Link>
  )
}

export const ProductCardNew = ({ product }) => {

  const findTheId = () => {
    console.log('/product-display/' + product.id)
  }

  return (
    <Link
      to={'/product-display/' + product.id}
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden group flex flex-col"
    >

      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
        />

        {
          product.discountPercentage && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
              -{Math.round(product.discountPercentage)}%
            </span>
          )
        }
      </div>

      <div className="p-3 flex flex-col flex-grow">

        <p className="text-xs text-gray-500 truncate">
          {product.category}
        </p>

        <h2 className="text-sm font-semibold text-gray-800 truncate">
          {product.title}
        </h2>

        <div className="flex items-center text-xs text-yellow-500 mt-1">
          ⭐ {product.rating}
        </div>

        <div className="flex justify-between items-center mt-auto pt-2">

          <span className="text-base font-bold text-gray-900">
            ₹{product.price}
          </span>

          <button
            onClick={findTheId}
            className="bg-black text-white text-xs px-3 py-1.5 rounded-md hover:bg-gray-800 transition"
          >
            Add
          </button>

        </div>
      </div>
    </Link>
  );
};

export const ProductPreviewNew = () => {

const params = useParams();

const [product, setProducts] = useState({})

const [activeImage, setActiveImage] = useState("")

useEffect(() => {

  const getProductById = async () => {

    await axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
  }

  getProductById()

}, [params.id])

useEffect(() => {
  setActiveImage(product.images?.[0] || product.thumbnail)
}, [product])

  const discountedPrice = product.discountPercentage
    ? (
      product.price -
      (product.price * product.discountPercentage) / 100
    ).toFixed(0)
    : product.price;

  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="grid grid-cols-2 gap-10">

        <div>

          <div className="bg-white rounded-xl shadow-sm p-4">
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>

          <div className="flex gap-3 mt-4">

            {
              product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  onClick={() => setActiveImage(img)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                    activeImage === img
                      ? "border-black"
                      : "border-gray-200"
                  }`}
                />
              ))
            }

          </div>
        </div>

        <div className="flex flex-col">

          <p className="text-sm text-gray-500 mb-2">
            {product.category}
          </p>

          <h1 className="text-3xl font-semibold mb-4">
            {product.title}
          </h1>

          <div className="flex items-center mb-4 text-yellow-500">
            ⭐ {product.rating}

            <span className="text-gray-500 text-sm ml-2">
              (124 reviews)
            </span>
          </div>

          <div className="mb-6">

            {
              product.discountPercentage ? (
                <>
                  <span className="text-3xl font-bold text-black">
                    ₹{discountedPrice}
                  </span>

                  <span className="text-lg text-gray-400 line-through ml-3">
                    ₹{product.price}
                  </span>

                  <span className="ml-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    -{Math.round(product.discountPercentage)}%
                  </span>
                </>
              ) : (
                <span className="text-3xl font-bold">
                  ₹{product.price}
                </span>
              )
            }

          </div>

          <p className="text-gray-600 mb-8">
            {product.description}
          </p>

          <div className="flex gap-4">

            <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
              Add to Cart
            </button>

            <button className="border border-black px-8 py-3 rounded-lg hover:bg-gray-100 transition">
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export const Component1 = () => {

  const count = useSelector((state) => state.counter.value)

  const userName = useSelector((state) => state.user.userName);

  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Component 1 rendered")
    dispatch(setUserName("Shelly"))
  }, [dispatch])

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <h1 className="mb-3">Component 1</h1>

      <div className="flex items-center gap-4">

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        <span className="text-2xl font-bold">
          {count}
        </span>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

      </div>

      {userName ? userName : "NO Name Found"}

    </div>
  )
}

export const Component2 = () => {

  const count = useSelector((state) => state.counter.value)

  const userName = useSelector((state) => state.user.userName);

  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center justify-center h-screen">

      <h1>Component 2</h1>

      <p>{count}</p>

      <div className="mt-4 p-4 border rounded-md">

        <p>UserName:{userName}</p>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => dispatch(setUserName("John Doe"))}
        >
          Change Name
        </button>

      </div>
    </div>
  )
}

export const Component3 = () => {

  const count = useSelector((state) => state.counter.value);

  const userName = useSelector((state) => state.user.userName);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">

      <h1>Component 3</h1>

      <p>{count}</p>

      <div className="mt-4 p-4 border rounded-md">
        <p>UserName:{userName}</p>
      </div>

    </div>
  )
}