import styled from 'styled-components'

export const Form = styled.form`
    width:1100px;
    margin:0 auto;
    padding:0 2%;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    h1{
        width:100%;
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
    }
    #btn_cancel{
        color:white;
        background-color:red;
    }
    #btn_save{
        background-color:#18A558;
        color:white;
    }
`