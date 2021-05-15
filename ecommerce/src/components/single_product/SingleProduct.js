import React ,{useState,useEffect} from 'react'
import api from '../../services/api'
import {SingleProductContainer,ImgProductContainer,ProductInfoContainer} from '../../styles/singleProduct'

const SingleProduct = (props) => {
    const id = props.match.params.id
    const [ product,setProduct ] = useState('')
    const [quantity,setQuantity] = useState(1)

    if(quantity < 1){
        setQuantity(1)
    }

    useEffect(() => {
        const getOneProduct = async () => {
            await api.get('/products/'+id)
            .then(res => {
                const singleProduct = res.data
                setProduct(singleProduct)
            })
        }
        getOneProduct()
    },[setProduct,id])

    const inc = () => {
        setQuantity( quantity + 1)
    }

    const dec = () => {
        setQuantity( quantity - 1)
    }

    return(
        <SingleProductContainer>
            <ImgProductContainer>
                <img alt='img_product' src={'http://localhost:8081/uploads/'+product.img}/> 
            </ImgProductContainer>
            <ProductInfoContainer>
                <p>{product.name}</p>
                <h1>R$ {product.price * quantity}</h1>
                <div>
                    <p>quantidade:</p>
                    <button className='btn_quantity' onClick={() => dec()}>-</button>
                    <span>{quantity}</span>
                    <button className='btn_quantity' onClick={() => inc()}>+</button>
                </div>
                <button className='btn_buy'>Buy now</button>
                <button className='btn_card'>Add to card</button>
            </ProductInfoContainer>
        </SingleProductContainer>
    )
}

export default SingleProduct