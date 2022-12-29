import React from 'react'
import Books from '../Components/Books/books'
import Footer from '../Partials/footer'
import Header from '../Partials/header'
import Sidebar from '../Partials/sidebar'

function BookLayout() {
    let token = sessionStorage.getItem("token")
    if(!token) {
        window.location.href='/'
    }
    return (
        <div>
            <Header />
                <Books />
            <Footer />
        </div>
    )
}

export default BookLayout