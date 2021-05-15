import React from 'react'
import { Aside } from '../styles/sidebar'

const SideBar = () => {
    return(
        <Aside>
            <h2>Categorias</h2>
            <ul>
                <li>Notebooks</li>
                <li>Celulares</li>
                <li>Acessórios e periférico</li>
            </ul>
        </Aside>
    )
}

export default SideBar