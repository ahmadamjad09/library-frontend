import React from 'react'
import Home from '../Components/Home/home'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'

function HomeLayout() {
    let token = sessionStorage.getItem("token")
    if(!token) {
        window.location.href='/'
    }
    return (
        <div>
            <Header />
                <Home />
            <Footer />
        </div>
    )
}

export default HomeLayout