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
        border:1px dotted #ccc;
        width:100%;
        margin-top:10px;
        height:300px;
        &:hover p{
            animation:load 1s infinite linear;
        }
        p{
            display:inline-block;
            font-weight:lighter;
            font-size:100px;
            line-height:300px;
        }
    }
    @keyframes load{
        0% { transform: rotate(0deg) }
        100% { transform : rotate(360deg) }
    }
    input{
        width:49%;
        margin: 0 0.5%;
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