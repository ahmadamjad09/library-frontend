import React from 'react'
import {Link} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'
function Header() {
    let navigate = useNavigate()
    let token = sessionStorage.getItem("token")
    let decoded
    if(token) {
        decoded = jwt_decode(token)
    }
    console.log("decoded",decoded)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            {/* <div className='m-3'> */}
                <Link className="navbar-brand" to={token ? "/home" : '/'}>Logo</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    {token && <li className="nav-item active">
                        <Link to='/home' style={{color:'#fff'}} className="nav-link">Home</Link>
                    </li>}
                    {decoded && decoded.role_id == 2 && <li className="nav-item">
                        <Link to='/users' style={{color:'#fff'}} className="nav-link">Users</Link>
                    </li>}
                    {/* <li className="nav-item">
                        <Link to='/books' style={{color:'#fff'}} className="nav-link">Books</Link>
                    </li> */}
                    {decoded && decoded.role_id == 2 && <li className="nav-item">
                        <Link to='/roles' style={{color:'#fff'}} className="nav-link">Roles</Link>
                    </li>}
                    {token && <li className="nav-item">
                        <a onClick={()=>{
                            sessionStorage.removeItem("token")
                            navigate("/")
                        }} style={{color:'#fff',cursor:'pointer'}} className="nav-link">Logout {decoded?.user_name}</a>
                    </li>}
                    </ul>
                </div>
            {/* </div> */}
            
        </nav>
    )
}
export default Header
