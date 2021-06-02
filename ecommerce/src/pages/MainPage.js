import React from 'react'
import LoadContent from '../components/main_content/LoadContent'
import Header from '../components/Header'
import ButtonAdd from '../components/ButtonAdd'
import ButtonMoney from '../components/ButtonMoney'

const MainPage = () => {
    return(
        <>
            <Header/>
            <LoadContent/>
            <ButtonAdd/>
            <ButtonMoney/>
        </>
    )
}

export default MainPage