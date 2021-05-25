import React from 'react'
import Header from '../components/Header'
import SingleProduct from '../components/single_product/SingleProduct'


const ProductDetail = (props) => {
    return(
        <>
            <Header/>
            <SingleProduct {...props}/>
        </>
    )
}

export default ProductDetail