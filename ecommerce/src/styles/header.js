import styled from 'styled-components'

export const Head = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    border-bottom: 1px solid #ccc;
    align-items : center;
    padding: 17px 2%;
    @media screen and (max-width:608px){
        flex-direction:column;
    }
    #user_icon{
        cursor:pointer;
    }
`

export const Search = styled.div`
    position:relative;
    border:1px solid #ccc;
    @media screen and (max-width:608px){
        margin:4px 0;
    }
    input{
        height:35px;
        width:300px;
        padding-left:10px;
        border: 0;
        &:focus{
            outline :0;
            border:0;
        }
    }
    button{
        height:35px;
        width:50px;
        position:absolute;
        top:0;
        right:0;
        border:0;
        border-left:1px solid #ccc;
        cursor:pointer;
        &:hover{
            transition:500ms;
            background-color:#ccc;
        }
    }
`
