import React from 'react'
import AddBook from '../Components/Books/addBook'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'
import jwt_decode from 'jwt-decode'
function AddBookLayout() {
    let token = sessionStorage.getItem("token")
    let decode
    if(token) {
        decode = jwt_decode(token)
    }
    if(!token) {
        window.location.href='/'
    } else if(token && decode?.role_id==4) {
        window.location.href='/home'
    }
    return (
        <div>
            <Header />
                <AddBook />
            <Footer />
        </div>
    )
}

export default AddBookLayout