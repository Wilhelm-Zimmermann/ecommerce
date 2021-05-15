import React from 'react'
import { Head, Search } from '../styles/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <Head>
            <div className="logo">
                <h1 style={{display:"inline-block",color: "#055C9D"}}>R</h1>
                <span style={{fontSize: "19px",color:"#055C9D"}}> shop</span>
            </div>
            <Search>
                <input type="text"/>
                <button><FontAwesomeIcon icon={faSearch}/></button>
            </Search>
        </Head>
    )
}

export default Header