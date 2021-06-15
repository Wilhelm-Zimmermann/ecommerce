import React,{useState,useEffect} from 'react'
import WithComponentLoading from '../components/main_content/contentLoading'
import UserProfileData from '../components/UserProfileData'
import api from '../services/api'
import Header from '../components/Header'
import { Paginator,Container } from '../styles/profile'
import ReactPaginate from 'react-paginate'

const UserProfile = () => {
    const ComponentLoading = WithComponentLoading(UserProfileData)
    const [curPage, setCurpage] = useState(1);
    const [perPage] = useState(4);
    const [pageCount, setPageCount] = useState(0)
    const [ orders,setOrders ] = useState([])


    
    const [user, setUser] = useState({
        data : null,
        loading: false,
    })
    useEffect(() => {
        const getUser = async () => {
            const indexOfLastPost = Number(curPage) * Number(perPage);
            const indexOfFirstPost = Number(indexOfLastPost) - Number(perPage);
            setUser({loading : true})
            await api.get('/user/profile')
            .then(res => {
                const userInfo = res.data
                if(res.data.orders !== undefined){
                    const slice = res.data.orders.slice(indexOfFirstPost, indexOfLastPost);
                    setOrders(slice)
                    setPageCount(Math.ceil(res.data.orders.length / perPage))
                }
                setUser({data : userInfo,loading:false})
            })
        }
        getUser()
    },[curPage,setOrders])
    const handlePageClick = (num) => {
        setCurpage(num + 1)
    }
    return(
        <div>
            <Header/>
            <Container>
                <ComponentLoading 
                    pageCount={pageCount} 
                    handlePageClick={handlePageClick} 
                    isLoading={user.loading} 
                    orders={orders} 
                    data={user.data}
                />
                <Paginator>
                <ReactPaginate className='pagination'
                        previousLabel={"prev"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={e => handlePageClick(e.selected)}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}/> 
                </Paginator>
            </Container>
        </div>
    )
}

export default UserProfile


// import React, { useState } from "react"
// function usePagination(data, itemsPerPage) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const maxPage = Math.ceil(data.length / itemsPerPage)
// function currentData() {
//   const begin = (currentPage - 1) * itemsPerPage;
//   const end = begin + itemsPerPage;
//   return data.slice(begin, end);
//  }
//  function next() {
//    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
//  }
//  function prev() {
//    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
//  }
//  function jump(page) {
//    const pageNumber = Math.max(1, page);
//    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
//  }
//  return { next, prev, jump, currentData, currentPage, maxPage };
// }
// export default usePagination