import styled from 'styled-components'

export const Modal = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:rgba(0,0,0,0.5);
    div{
        width:500px;
        height:200px;
        background-color:white;
        display:flex;
        flex-direction:column;
        justify-content:inherit;
        align-items:inherit;
        position:relative;
    }
    p{
        font-size: 23px;
        font-weight:lighter;
        margin:10px 0;
    }

    span{
        position:absolute;
        top:-6px;
        right:-6px;
        background:black;
        color:white;
        width:25px;
        height:25px;
        border-radius:calc(25px / 2);
        text-align:center;
        line-height:25px;
        cursor:pointer;
    }
`