import React from 'react'
import Home from '../Components/Home/home'
import AddRole from '../Components/Roles/addRole'
import Roles from '../Components/Roles/roles'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'
import jwt_decode from 'jwt-decode'
function AddRoleLayout() {
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
                <AddRole />
            <Footer />
        </div>
    )
}

export default AddRoleLayout