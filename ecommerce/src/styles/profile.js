import styled from 'styled-components'

export const Container = styled.div`
    width:90%;
    margin:20px auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    ${'' /* align-items:center; */}
    ${'' /* User profile style */}
    .user{
        flex:3;
        border:1px solid #ccc;
    }
    .user_info{
        width:90%;
        margin:0 auto;
        padding:0 10px;
    }
    .user_info p{
        margin:16px 0;
    }
    .user_info h2{
        font-weight:lighter;
        margin:16px 0;
    }
    .user_info h1{
        font-weight:lighter;
        margin:16px 0;
    }
    .user_photo{
        width:200px;
        height:200px;
        background:black;
        border-radius:50%;
    }
    .user_photo img{
        border-radius:50%;
        max-width:100%;
    }
    ${'' /* Orders Style */}
    .orders{
        flex:7;
        margin-left:10px;
        padding:7px;
        border:1px solid #ccc;
    }
    .orders h1{
        text-align:center;
        font-weight:lighter;
        padding:10px;
    }
    .orders table{
        width:100%;
    }
    .orders table tr th{
        width:33%;
    }
    .orders table #img_product{
        width:100%;
    }

    ${'' /* Pagination */}
 .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    }
    .pagination > .active > a{
    background-color: #47ccde ;
    border-color: #47ccde ;
    color: #fff;
    }
    .pagination > li > a{
    border: 1px solid #47ccde ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    }
    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #47ccde ;
    border-color: #47ccde;
    outline: none ;
    }
    .pagination > li > a, .pagination > li > span{
    color: #47ccde
    }
    .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius: unset
    }

    ${'' /* media queries */}
    @media screen and (max-width:822px){
        flex-direction:column;
        .user{
            width:90%;
            text-align:center;
            margin:5px;
            height:auto;
        }
        .user_photo{
            margin:0 auto;
        }
        .orders{
            margin:5px;
            width:90%;
            height:auto;
        }
    }
`

export const Paginator = styled.div`
    .orders{
        width:69%;
        padding:7px;
        border:1px solid #ccc;
        height:600px;
    }
    .orders table{
        width:100%;
    }
    .orders table tr th{
        width:33%;
    }
    .orders table #img_product{
        width:100%;
    }
 .pagination {
    margin: 15px auto;
    display: flex;
    list-style: none;
    outline: none;
    }
    .pagination > .active > a{
    background-color: #47ccde ;
    border-color: #47ccde ;
    color: #fff;
    }
    .pagination > li > a{
    border: 1px solid #47ccde ;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    }
    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
    background-color: #47ccde ;
    border-color: #47ccde;
    outline: none ;
    }
    .pagination > li > a, .pagination > li > span{
    color: #47ccde
    }
    .pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span{
    border-radius: unset
    }
`