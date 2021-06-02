import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
import {Modal} from '../styles/paymentModal'

// It will active when you click the buy button
// And return success or fail screen
const PaymentModal = (props) => {
    const { payment } = props
    return(
        <Modal>
            <div>
                <FontAwesomeIcon
                icon={payment === 'Payment Successfull' ? faCheck : faTimes} 
                color={payment === 'Payment Successfull' ? 'green' : 'red'} size='5x'/>
                <p>{payment}</p>
                <span>X</span>
            </div>
        </Modal>
    )
}

export default PaymentModal