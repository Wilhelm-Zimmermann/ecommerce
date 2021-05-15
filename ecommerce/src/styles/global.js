import { createGlobalStyle } from 'styled-components'

const GlobaStyle = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        background:#eee;
        box-sizing:border-box;
        font-family: Arial;
    }
    html,body{
        height:100%;
    }
`

export default GlobaStyle