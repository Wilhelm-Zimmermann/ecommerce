import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'


import { isAuthenticated } from './services/auth'
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";
import ProductDetail from "./pages/ProductDetail";
import AddProducts from "./pages/AddProducts";
import SearchProduct from "./pages/SearchProduct";
import Money from "./pages/Money";
import UserProfile from './pages/UserProfile';

const PrivateRoute = ({ component : Component,...rest}) => {
    return(
    <Route
        {...rest}
        render={props => 
        isAuthenticated()?(
            <Component {...props}/>
        ):(
            <Redirect to={{ pathname: '/login', state: {from : props.location }}} />
        )
    }
    />)
}

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/new_user' component={SignUp} />
                <Route exact path='/' component={MainPage} />
                <Route path='/product/:id' render={props => <ProductDetail {...props}/>}/>
                <Route path='/products/:name/name' render={props => <SearchProduct {...props}/>}/>
                <PrivateRoute path='/new_product' component={AddProducts} />
                <PrivateRoute path='/users/money' component={Money} />
                <PrivateRoute path='/users/profile' component={UserProfile}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes