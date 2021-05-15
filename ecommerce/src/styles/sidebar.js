import styled from 'styled-components'

export const Aside = styled.aside`
    width:30%;
    min-height:700px;
    border:1px solid #0E86D4;
    h2{
        text-align:center;
        font-weight:lighter;
        color:#666;
    }
    li{
        margin-top:10px;
        list-style-type:none;
    }
    li a{
        color:#888;
        text-decoration:none;
    }
    li a:hover{
        border-bottom:1px solid #555;
    }
`