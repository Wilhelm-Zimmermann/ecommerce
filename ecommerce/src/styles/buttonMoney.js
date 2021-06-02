import styled from 'styled-components'

export const Button = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    font-size:50px;
    cursor:pointer;
    border:1px solid #ccc;
    background-color:white;
    position:fixed;
    bottom:80px;
    right:10px;
    text-align:center;
    &:hover{
        transition:500ms;
        color:#0E86D4;
        background-color:#ddd;
    animation:bounce 500ms infinite alternate;
    }
    @keyframes bounce {
        0%{ margin-bottom:0;}
        100%{ margin-bottom:30px;}
    }
`