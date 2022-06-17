import React from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../app/store'
import './ProductCard.css'
import { inventoryProductType } from '../features/ProductSlice'

const ProductCard = (props: inventoryProductType) => {

  const dispatch = useAppDispatch();

  return (
    <div className='product'>
      <h3 className='product__title'>
      <input type="submit" className='product__orderbutton' value="Order" onClick={(e) => {}} /><b>{props.name}</b></h3>
      <p className='product__description'>{props.description}</p>
      <p className='product__description'><b>Stock:</b> {props.stock}</p>
      <p className='product__description'><b>Price: $</b> {props.price}</p>
      <p className='product__description'><b>Provider:</b> {props.providerId}</p>
      <p className='product__description'><b>Minimum:</b> {props.minimumAmount}</p>
      <p className='product__description'><b>Maximum:</b> {props.maximumAmount}</p>
      <input type="submit" className='product__button' value="Edit" onClick={(e) => {}} />
      <input type="submit" className='product__button' value="Delete" onClick={(e) => {}} />
    </div>
  )
}

export default ProductCard;