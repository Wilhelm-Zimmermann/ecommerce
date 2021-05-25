import React,{useState} from 'react'
import { Head, Search } from '../styles/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import api from '../services/api'

const Header = () => {
    // products/:name/name
    const [search, setSearch] = useState('')


    const findByName = async () => {
        setSearch(search.replace(' ','%20'))
        await api.get('/products/'+search+'/name')
        window.location.href = '/products/'+search+'/name'
    }
    return (
        <Head>
            <div className="logo">
                <h1 style={{display:"inline-block",color: "#055C9D"}}>R</h1>
                <span style={{fontSize: "19px",color:"#055C9D"}}> shop</span>
            </div>
            <Search>
                <input type="text" onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={() => findByName()}><FontAwesomeIcon icon={faSearch}/></button>
            </Search>
        </Head>
    )
}

export default Header