import React,{useState,useEffect} from 'react'
import api from '../services/api'
import { Center,ProductSingle,ProductInfo,Searched,NotFound } from '../styles/mainContent'
import Header from '../components/Header'

const SearchProduct = (props) => {
    const name = props.match.params.name
    const [ product, setProduct ] = useState({
        data : null,
        amount : 0
    })

    useEffect(() => {
        const findProduct = async () => {
        await api.get('/products/'+name+'/name')
        .then(res => {
            const productSearch = res.data.result
            const productAmount = res.data.amount

            setProduct({...product,data : productSearch,amount :productAmount})
        })
    }
    findProduct()
    },[])

    const getSingleProduct = (id) => {
        window.location.href = '/product/'+id
    }
    if(product.amount === 0){
        return (
            <div>
                <Header/>
                <NotFound>No products found with this name</NotFound>
            </div>
        )
    }

    return(
        <>
        <Header/>
        <Searched>
        <h1>{product.amount}, products found in this search</h1>
        <Center>
            {product['data'].map(single => {
                return(
                        <ProductSingle key={'product_'+single._id}>
                            <div onClick={() => getSingleProduct(single._id)}>
                                <img alt='product_img' key={'img_'+single._id} src={'http://localhost:8081/uploads/'+single.img}/>
                                <ProductInfo>
                                    <h2 key={'price_'+single._id}>R$ {single.price}</h2>
                                    <p key={'name_'+single._id}>{single.name}</p>
                                </ProductInfo>
                            </div>
                        </ProductSingle>
                )
            })}
        </Center>
        </Searched>
        </>
    )
}

export default SearchProduct