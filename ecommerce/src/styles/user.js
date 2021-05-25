import styled from 'styled-components'

export const Container = styled.div`
    width:400px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    padding:0 2%;
    border:1px solid #ddd;
    min-height:400px;
    box-shadow:3px 3px 8px 1px rgba(0,0,0,0.4);
    h1{
        text-align:center;
        font-weight:lighter;
        color:#777;
        margin-top:20px;
    }

    #error{
        color:red;
    }
    
    input{
        width:100%;
        height:40px;
        border:1px solid #ccc;
        padding-left:10px;
        margin-top:20px;
    }
    input:focus{
        outline:0;
        border:1px solid #003060;
    }
    button{
        cursor:pointer;
        display:block;
        width:200px;
        color:white;
        background-color:#003060;
        margin:20px auto 0 auto;
        height:40px;
        border:0;
    }
    button:hover{
        transition:700ms;
        background-color:#055C9D;
    }
    p{
        color:#777;
        text-align:center;
        margin-top:20px;
        cursor:pointer;
    }
    #pass{
        position:relative;
    }
    #icon{
        position:absolute;
        right:10px;
        top:50%;
    }
`