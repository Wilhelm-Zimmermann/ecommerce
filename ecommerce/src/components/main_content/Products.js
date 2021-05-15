import React from 'react'
import { Center,ProductSingle,ProductInfo,NotFound } from '../../styles/mainContent'

const Products = (props) => {

    const { products } = props

    if(products === null || products === '4'){ 
        return(
            <NotFound>No products found click on the add button to add a new product</NotFound>
        )
    }
    
    const getSingleProduct = (id) => {
        window.location.href = '/product/'+id
    }


    return(
        <main style={{ width:'100%'}}>
            <Center>
                    {products.map(product => {
                        return(
                        <ProductSingle key={'product_'+product._id}>
                            <div onClick={() => getSingleProduct(product._id)}>
                                <img alt='product_img' key={'img_'+product._id} src={'http://localhost:8081/uploads/'+product.img}/>
                                <ProductInfo>
                                    <h2 key={'price_'+product._id}>R$ {product.price}</h2>
                                    <p key={'name_'+product._id}>{product.name}</p>
                                </ProductInfo>
                            </div>
                        </ProductSingle>
                        )
                    })}
                
            </Center>
        </main>
    )
}

export default Products