import React from 'react'
import Users from '../Components/Users/users'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'
import jwt_decode from 'jwt-decode'
function UsersLayout() {
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
                <Users />
            <Footer />
        </div>
    )
}

export default UsersLayout