import React from 'react'

function Footer() {
    return (
        // <div></div>
        <footer style={{position: "absolute",bottom: 0,width: "100%"}} className="bg-light text-center text-lg-start mt-5">
            <div className="text-center p-3" style={{backgroundColor: "#0d6efd"}}>
                <span style={{color:"#fff"}}>© 2020 Copyright:</span>
                <a style={{color:"#fff"}} href="https://mdbootstrap.com/">Author Books</a>
            </div>
        </footer>
    )
}

export default Footer