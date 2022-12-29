import React from 'react'
import EditUser from '../Components/Users/editUser'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'
import jwt_decode from 'jwt-decode'
function EditUserLayout() {
    let token = sessionStorage.getItem("token")
    let decode
    if(token) {
        decode = jwt_decode(token)
    }
    if(!token) {
        window.location.href='/'
    } else if(token && decode?.role_id!=2) {
        window.location.href='/home'
    }
    return (
        <div>
            <Header />
                <EditUser />
            <Footer />
        </div>
    )
}

export default EditUserLayout