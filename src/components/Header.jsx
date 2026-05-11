import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <div className='header'>
        <h2>ShopEasy</h2>

        <div className='header-links'>
            <p>Home</p>
            <p>Products</p>
            <p>Cart</p>
            <p>Profile</p>
        </div>
    </div>
  )
}