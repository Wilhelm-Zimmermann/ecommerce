import React, { useEffect,useState } from 'react'
import WithComponentLoading from './contentLoading'
import api from '../../services/api'
import Products from './Products'

// This component will load all products
const LoadProducts = () => {
    const ComponentLoading = WithComponentLoading(Products)
    const [appState,setAppState] = useState({
        loading: false,
        data : null
    })

    useEffect(() => {
        const loadProducts = async () => {
            setAppState({ loading : true })
                await api.get('/products')
                .then(data => {
                    const allProducts = data.data['response']
                    setAppState({loading: false,data:allProducts})
                }).catch(err => {
                    console.log(err)
                })
                    
        }
        loadProducts()
    },[setAppState])

    return(
        <div>
            <ComponentLoading isLoading={appState.loading} products={appState.data}/>
        </div>
    )
}

export default LoadProducts