import React ,{useState,useEffect} from 'react'
import api from '../../services/api'
import {SingleProductContainer,ImgProductContainer,ProductInfoContainer} from '../../styles/singleProduct'
import PaymentModal from '../PaymentModal'

const SingleProduct = (props) => {
    const id = props.match.params.id
    const [ product,setProduct ] = useState('')
    const [quantity,setQuantity] = useState({
        quantityValue : 0
    })
    // this state is to the PaymentModal
    const [response, setResponse] = useState({
        visible : false,// is visible or not
        res : '' // response come from backend
    })

    if(quantity.quantityValue < 1){
        setQuantity({...quantity, quantityValue : 1})
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
        setQuantity( {...quantity,quantityValue : quantity.quantityValue + 1})
    }

    const dec = () => {
        setQuantity( {...quantity,quantityValue : quantity.quantityValue - 1})
    }

    const buyProduct = async () => {
        // wait to create order
        const order = await api.post('/order/'+id,quantity)
        // pay the order
        await api.post('/transation/'+order.data.id)
        .then(res => {
            setResponse({ ...response, res : res.data.msg,visible : true})
        }).catch(err => {
            if(err.response){
                setResponse({...response,res : err.response.data.error,visible : true})
            }
        })
    }
    window.onclick = () => setResponse({ ...response, visible : false})
    return(
        <SingleProductContainer>
        { response.visible ? <PaymentModal payment={response.res}/> : null}
            <ImgProductContainer>
                <img alt='img_product' src={'http://localhost:8081/uploads/'+product.img}/> 
            </ImgProductContainer>
            <ProductInfoContainer>
                <p>{product.name}</p>
                <h1>R$ {product.price * quantity.quantityValue}</h1>
                <div>
                    <p>quantidade:</p>
                    <button className='btn_quantity' onClick={() => dec()}>-</button>
                    <span>{quantity.quantityValue}</span>
                    <button className='btn_quantity' onClick={() => inc()}>+</button>
                </div>
                <button className='btn_buy' onClick={() => buyProduct()}>Buy now</button>
                <button className='btn_card'>Add to card</button>
            </ProductInfoContainer>
        </SingleProductContainer>
    )
}

export default SingleProduct