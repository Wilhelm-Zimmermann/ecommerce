import React,{ useState } from 'react'
import api from '../services/api'
import {MoneyContainer} from '../styles/money'
const Money = () => {   
    const [ money, setMoney ] = useState({
        money : 0
    })

    const addMoney = () => {
        // Updating the user money
        api.put('/user/money',money)
        window.location.href = '/'
    }
    return(
        <MoneyContainer>
            <input type='number' name='money' placeholder='Do you need money?' onChange={(e) => setMoney({...money, money : e.target.value})}/>
            <button onClick={() => addMoney()}>Add to your account</button>
        </MoneyContainer>
    )
}

export default Money