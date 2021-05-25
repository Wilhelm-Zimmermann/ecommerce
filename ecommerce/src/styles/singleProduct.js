import styled from 'styled-components'

export const SingleProductContainer = styled.div`
    max-width:1100px;
    padding:0 2%;
    margin: 15px auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items: center;
    @media screen and (max-width:768px){
        flex-direction:column;
    }

`

export const ImgProductContainer = styled.div`
    width:40%;
    text-align:center;
    @media screen and (max-width:670px){
        width:100%;
    }
    img{
        width:300px;
        height:300px;
    }
`

export const ProductInfoContainer = styled.div`
    width:58%;
    margin-left:2%;
    @media screen and (max-width:670px){
        width:100%;
    }
    button{
        border:0;
        margin:7px 3px;
        width:150px;
        height:40px;
        cursor:pointer;
        font-size:17px;
    }
    .btn_quantity{
        width:30px;
        height:30px;
    }
    .btn_buy{
        background:#18A558;
        color:white;
    }
    .btn_card{
        width:180px;
        background:#0E86D4;
        color:white;
    }
    h1{
        font-weight:lighter;
        margin:10px 0;
    }
`