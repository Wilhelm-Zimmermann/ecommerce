import styled from 'styled-components'

export const Searched = styled.div` 
    h1{
        margin:20px 0;
        text-align:center;
        font-weight:lighter;
        color:#aaa;
    }

`

export const Center = styled.div`
    max-width:1100px;
    min-height:100px;
    margin:0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
`

export const ProductSingle = styled.div`
    width:calc(25% - 1%);
    margin:5px 0.4%;
    cursor:pointer;
    border: 1px solid #ccc;
    ${'' /* I put weird widths because the borders */}
    @media screen and (max-width:1080px){
        width:32%;
    }
    @media screen and (max-width:722px){
        width:48%;
    }
    @media screen and (max-width:456px){
        width:100%;
        margin:5px 0;
    }
    &:hover{
        transition:600ms;
        box-shadow:1px 1px 5px 1px rgba(0,0,0,0.4);
    }
    height:300px;
    img{
        width:100%;
        height:200px;
    }
`

export const ProductInfo = styled.div`
    padding:0 10px;
    h2{
        font-weight:lighter;
        color:#003060;
    }
    p{
        color:#555;
    }
`

export const NotFound = styled.div`
    text-align:center;
    margin-top:50px;
    font-size:30px;
    font-weight:lighter;
`