import React,{useEffect, useState} from 'react'
import { Container } from '../styles/profile'
import ReactPaginate from 'react-paginate'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

const UserProfileData = ({data,orders}) => {
    if(!data || data == null){ return (<h1>Error on get Profile</h1> )}
    
    return(
        <Container>
            <div className='user'>
                <div className='user_info'>
                    <div className='user_photo'>
                        <img src='https://avatars.githubusercontent.com/u/79175606?v=4' />
                    </div>
                    <h2>{data.username}</h2>
                    <h1>R$ {data.money}</h1>
                    <p><FontAwesomeIcon icon={faEnvelope}/> {data.email}</p>
                </div>
            </div>
            <div className='orders'>
            <h1>All Orders </h1>
                <table>
                    {orders.length > 0 ? orders.map(order => {
                        return(
                            <tbody>
                                <tr>
                                    <th><img id='img_product' src={'http://localhost:8081/uploads/'+order.order.product.img}/></th>
                                    <th>{order.order.product.name}</th>
                                    <th>R$ {order.order.totalPrice}</th>
                                </tr>
                            </tbody>
                        )
                    }): <h1>No orders.....</h1>}
                </table> 
            </div>
        </Container>
    )
}

export default UserProfileData
