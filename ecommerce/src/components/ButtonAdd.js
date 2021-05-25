import React from 'react'
import { Button } from '../styles/buttonAdd'
import {Link} from 'react-router-dom'


const ButtonAdd = () => {
    return(
        <>
        <Link to='/new_product'>
            <Button>
                +
            </Button>
        </Link>
        </>
    )
}

export default ButtonAdd