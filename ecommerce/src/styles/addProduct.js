import styled from 'styled-components'

export const Form = styled.form`
    max-width:700px;
    margin:40px auto;
    padding:0 2%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    h1{
        width:100%;
        margin:10px 0;
        text-align:center;
        font-weight:lighter;
    }
    #img{
        display:none;
    }
    label[for=img]{
        text-align:center;
        cursor:pointer;
        width:16%;
        height:30px;
        &:hover {
            transition:400ms;
            transform:rotate(360deg);
        }
    }
    input{
        width:40%;
        height:30px;
        border:1px solid #bbb;
        padding-left:10px;
        &:focus{
            outline:0;
            border:1px solid #0E86D4;
        }
    }
    .w100{
        width:100%;
    }

    button{
        height:30px;
        margin:5px 2px;
        cursor:pointer;
        border:0;
        padding:5px;
    }
    #btn_cancel{
        color:white;
        background-color:red;
    }
    #btn_save{
        background-color:#18A558;
        color:white;
    }
    @media screen and (max-width: 780px){
        flex-direction:column;
        input{
            width:100%;
            margin-top:5px;
        }
    }
`