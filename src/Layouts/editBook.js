import React from 'react'
import EditBook from '../Components/Books/editBook'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'
import jwt_decode from 'jwt-decode'
function EditBookLayout() {
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
                <EditBook />
            <Footer />
        </div>
    )
}

export default EditBookLayout