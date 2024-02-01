"use client"
import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { add_to_cart, remove_from_cart } from '@/features/counter/counterSlice'
import "./cart.css"


function cart() {
    const cartCount = useSelector(state=>state.cart.value);
    const dispatch = useDispatch();
  return (
    <div className='cartDiv'>
        <div className="btndiv">
        <button
        onClick={()=>dispatch(add_to_cart())}>
            Add To Cart
        </button>
        <p>Cart: <span>{cartCount}</span></p>
        <button onClick={()=>dispatch(remove_from_cart())}>
            Remove From Cart
        </button>
        </div>
        <br />
    </div>
  )
}

export default cart