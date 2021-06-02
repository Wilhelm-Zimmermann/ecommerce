import React from 'react'
import { Button } from '../styles/buttonMoney'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

const ButtonMoney = () => {
    return(
        <>
        <Link to='/users/money'>
            <Button>
                <FontAwesomeIcon icon={faDollarSign} size='1x' color='green'/>
            </Button>
        </Link>
        </>
    )
}

export default ButtonMoney