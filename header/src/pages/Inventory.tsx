import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getAllProducts } from '../actions/getAllProducts'
import { useAppDispatch } from '../app/store'
import ProductCard from '../components/ProductCard'
import { posibleStatus } from '../features/posibleStatus'
import { inventoryProductType, selectInventoryProductsState, selectInventoryProductsStatus } from '../features/ProductSlice'
import './Inventory.css'

const Inventory = () => {

    const dispatch = useAppDispatch();
    const getInventoryProducts = useSelector(selectInventoryProductsState());
    const status = useSelector(selectInventoryProductsStatus());

    useEffect(() => {
        if (status === posibleStatus.IDLE) {
            dispatch(getAllProducts());
        }
    }, [dispatch])

    return (
        <div>
            <div className='container'>
                <div className='d-flex flex-wrap'>
                    <div className='card-product d-flex flex-column justify-content-between shadow p-3 mb-2 bg-light rounded'>
                        {getInventoryProducts.map((product: inventoryProductType) => {
                            return (
                                <div key={product.id} className=''>
                                    <ProductCard
                                        id={product.id}
                                        name={product.name}
                                        description={product.description}
                                        stock={product.stock}
                                        price={product.price}
                                        providerId={product.providerId}
                                        minimumAmount={product.minimumAmount}
                                        maximumAmount={product.maximumAmount}
                                    />
                                </div>)
                        })}
                    </div>
                </div>
                );
            </div>
        </div>
    )
}

export default Inventory