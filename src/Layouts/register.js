import React from 'react'
import Register from '../Components/Auth/register'

function RegisterLayout() {
    let token = sessionStorage.getItem("token")
    if(token) {
        window.location.href='/home'
    }
    return (
        <Register />
    )
}

export default RegisterLayout