import styled from 'styled-components'

export const MoneyContainer = styled.div`
    max-width:800px;
    height:100%;
    margin:40px auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    input{
        width:70%;
        height:40px;
        padding-left:10px;
        border:1px solid #ccc;
        &:focus{
            outline:0;
            border:1px solid black;
        }
    }
    button{
        width:27%;
        height:40px;
        border:0;
        background-color:#2C5E1A;
        color:white;
        cursor:pointer;
        &:hover{
            transition:600ms;
            background-color:#32CD30;
        }
    }
`