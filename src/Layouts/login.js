import React from 'react'
import Login from '../Components/Auth/login'
function LoginLayout() {
    let token = sessionStorage.getItem("token")
    if(token) {
        window.location.href='/home'
    }
    return (
        <Login />
    )
}

export default LoginLayout