import styled from 'styled-components'

export const Button = styled.button`
    width:60px;
    height:60px;
    border-radius:50%;
    font-size:50px;
    cursor:pointer;
    border:0;
    color:white;
    background-color:#0E86D4;
    position:fixed;
    bottom:10px;
    right:10px;
    &:hover{
        transition:500ms;
        color:#0E86D4;
        background-color:#ddd;
    }
`