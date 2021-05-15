import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import GlobalStyle from './styles/global.js'

import Header from './components/Header'
import LoadProducts from './components/main_content/LoadContent'
import SingleProduct from './components/single_product/SingleProduct'
import AddProducts from './components/AddProducts'
import ButtonAdd from './components/ButtonAdd'

import { Container } from './styles/app'

const App = () =>{
    return(
        <>
        <BrowserRouter>
            <GlobalStyle/>
            <Header/>
            <Container>
            <Switch>
                <Route path='/' exact>
                    <LoadProducts/>
                </Route>
                <Route path='/product/:id'
                    render={props => <SingleProduct {...props}/>}>
                </Route>
                <Route path='/add_products'>
                    <AddProducts/>
                </Route>
            </Switch>
            </Container>
            <ButtonAdd />
        </BrowserRouter>
        </>
    )
}

export default App