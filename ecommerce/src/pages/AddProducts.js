import React,{useState} from 'react'
import { Form } from '../styles/addProduct'
import api from '../services/api'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'

const AddProducts = () => {
    const [productInfo,setProductInfo] = useState({
        name : null,
        price : null,
        image : null,
        description: null
    })

    // this function adds a new product
    // Description will be added in the next update
    const saveProduct = async () => {
        const data = new FormData()

        const { name, price, image, /*description*/ } = productInfo

        if(name == null || price == null || image == null){
            return alert('There are fields empty')
        }


        data.append('name',name)
        data.append('price',price)
        data.append('img_product',image)
        await api.post('/products',data)
        .then(res => {
            window.location.href = '/'
        })
    }

    // Only cancel
    const cancel = () => {
        window.location.href = '/'
    }

    // Prevent form default to functions work correctly
    // Try to remove to see what happens
    return(
        <>
        <Header/>
        <Form onSubmit={(e) => e.preventDefault()}>
            <h1>Sell Your product Here!!</h1>
            <input type='text' className='w50' name='name' onChange={e => setProductInfo({...productInfo,name : e.target.value})} placeholder='Name'/>
            <input type='number' className='w50' name='price' onChange={e => setProductInfo({...productInfo,price : e.target.value})} placeholder='Price'/>
            <label for='img'>
                <p>+</p>
                <input type='file' id='img' onChange={e => setProductInfo({...productInfo,image : e.target.files[0]})} name='file'/>
            </label>
            {/* <textarea onChange={e => setProductInfo({...productInfo,description: e.target.value})}></textarea> */}
            <div className='w100'>
                <button id='btn_cancel' onClick={() => cancel()}>Cancel</button>
                <button id='btn_save' onClick={() => saveProduct()}>Add Product</button>
            </div>
        </Form>
        </>
    )
}

export default AddProducts