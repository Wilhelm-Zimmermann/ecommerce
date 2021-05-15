import React from 'react'
import { Button } from '../styles/buttonAdd'
import {Link} from 'react-router-dom'


const ButtonAdd = () => {
    return(
        <>
        <Link to='add_products'>
            <Button>
                +
            </Button>
        </Link>
        </>
    )
}

export default ButtonAdd