import React from 'react'
import { Load } from '../../styles/loading'

// This code will run when component is loading
const WithComponentLoading = (Component) => {
    return function LoadingComponent({ isLoading, ...props}){
        if(!isLoading) return <Component {...props}/>
        return(
            <Load><div></div><div></div><div></div><div></div></Load>
        ) 

    }
}

export default WithComponentLoading