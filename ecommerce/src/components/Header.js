import React,{useState} from 'react'
import { Head, Search } from '../styles/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser } from '@fortawesome/free-solid-svg-icons'
import api from '../services/api'
import { Link } from 'react-router-dom'

const Header = () => {
    // products/:name/name
    const [search, setSearch] = useState('')
    const [userAnimation, setUserAnimation] = useState({
        mouse : false,
    })

    const findByName = async () => {
        setSearch(search.replace(' ','%20'))
        await api.get('/products/'+search+'/name')
        window.location.href = '/products/'+search+'/name'
    }
    return (
        <Head>
        <Link to='/'>
        <div className="logo">
                <h1 style={{display:"inline-block",color: "#055C9D"}}>R</h1>
                <span style={{fontSize: "19px",color:"#055C9D"}}> shop</span>
            </div>
        </Link> 
            <Search>
                <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={() => findByName()}><FontAwesomeIcon icon={faSearch}/></button>
            </Search>
            <Link to='/users/profile'>
                <FontAwesomeIcon id='user_icon' 
                icon={faUser} size='2x' color='black'/>
            </Link>
        </Head>
    )
}

export default Header