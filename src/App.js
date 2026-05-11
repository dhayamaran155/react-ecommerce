import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Component1, Component2, Component3, ProductCard, ProductPreviewNew, UserCard } from './component';
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { AboutUs } from './components/Aboutus';
import { Dashboard } from './components/products/Dashboard';
import { ProductList } from './components/products/ProductList';
import { ProductPreview } from './components/products/ProductPreview';
import { GeneralL } from './components/General';



function Button({color,text}){
  return (
    <button style={{ backgroundColor: color }}>{text}</button>
  );
}

function UserDetails({name,age,cityCode}){

  let city ;
  if(cityCode === 'MUM'){
    city = 'Mumbai';
  }else if(cityCode === 'DEL'){
    city = 'Delhi';
  }else if(cityCode === 'BLR'){
    city = 'Bangalore';
  }

  const addCart = () =>{
    console.log("Added to cart")
  }

  const buyNow = () =>{ 
    console.log("Buy Now clicked")
  }

  return (
    <div className='user-card-details'>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <Button color={'blue'} text={'Add to Cart'} onClick={addCart} />
      <Button color={'green'} text={'Buy Now'} onClick={buyNow} />
    </div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const [buttonClickCount, setButtonClickCount] = useState(0);

 useEffect(()=>{
  console.log(buttonClickCount)
  setCounter(counter + 1)
  console.log("Clicked....")
 },[buttonClickCount]);



 const sampleArray = [1, 2, 3, 4, 5];
 const multipliedArray = sampleArray.map((item) => item * 2);
 const evenNumbers = sampleArray.filter((item) => item % 2 === 0);
 const firstEvenNumber = sampleArray.find((item) => item % 2 === 0);

 const productsArray = [
  {name: "Product 1", price: 100},
  {name: "Product 2", price: 200},
  {name: "Product 3", price: 300},
  {name: "Product 4", price: 400},
  {name: "Product 5", price: 500},
 ]

 for (let index = 0; index < productsArray.length; index++) {
  const element = productsArray[index];
  console.log("Index: ", index, "Element: ",typeof element);

 }


//  map()
//  filter()
//  find()
 const add = (a,b) => a + b;
 add(2,3);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path="/dhayamaran155/batch1" element={<Dashboard />} >
           <Route index element={<ProductList />} />
           <Route path='productList' element={<ProductList />} />
           <Route path='productPreview/:id/:price' element={<ProductPreview />} />
        </Route>
        <Route path='/product-display/:id' element={<ProductPreviewNew />} />
        <Route path='/general' element={<GeneralL title={"Dynamic Title - 1"} />} />
        {/* <Route path="/dhayamaran155/batch1/" element={<Dashboard />} /> */}
      </Routes>
      
      {/* <Link to="about-us">About US</Link> */}
      {/* <a href='/about-us'>About US</a> */}
    </div>
  );
}

export default App;

// npm install prop-types
     {/* {JSON.stringify(multipliedArray)}
      {JSON.stringify(evenNumbers)}
      {JSON.stringify(firstEvenNumber)}
      <p>{counter}</p>
      <button onClick={() => setButtonClickCount(buttonClickCount + 1)}>Click</button> */}

      {/* <Button color={'blue'} text={'Login'} />
      <Button color={'red'} text={'Register'} />()
      <Button color={'green'} text={'Logout'} />
      <Button color={'yellow'} text={'CheckOut'} /> */}
{/* 
      <UserDetails name={'John Doe'} age={"30"} cityCode={"MUM"}/>
      <UserDetails name={'Jane Smith'} age={25} cityCode={"DEL"}/>
      <UserDetails name={'Alice Johnson'} age={28} cityCode={"BLR"}/> */}


{/* <UserCard name={'Shelton'} email={'cB2Nt@example.com'} />  */}

{/* <div className='flex flex-wrap justify-center'>
  {
  productsArray.map((product) => (
    <ProductCard name={product.name} price={product.price} />
  ))
}
</div> */}

 {/* <ProductCard name={"projector"} price={100}/> */}