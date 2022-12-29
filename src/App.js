/* eslint-disable */
import React, { Component, Suspense } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Redux/store'
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Login = React.lazy(() => import('./Layouts/login'))
const Register = React.lazy(() => import('./Layouts/register'))
const Home = React.lazy(() => import('./Layouts/home'))
const Roles = React.lazy(() => import('./Layouts/role'))
const AddRole = React.lazy(() => import('./Layouts/addRole'))
const EditRole = React.lazy(() => import('./Layouts/editRole'))
const Users = React.lazy(() => import('./Layouts/user'))
const AddUser = React.lazy(() => import('./Layouts/addUser'))
const EditUser = React.lazy(() => import('./Layouts/editUser'))
const Books = React.lazy(() => import('./Layouts/book'))
const AddBook = React.lazy(() => import('./Layouts/addBook'))
const EditBook = React.lazy(() => import('./Layouts/editBook'))

class App extends Component {
  render() {
    let token = sessionStorage.getItem("token")
    let decoded
    if(token) {
        decoded = jwt_decode(token)
    }
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Login Page" element={<Register />} />
            <Route exact path="/home" name="Home Page" element={<Home />} />
            <Route exact path="/roles" name="Home Page" element={<Roles />} />
            <Route exact path="/add-role" name="Home Page" element={<AddRole />} />
            <Route exact path="/edit-role/:id" name="Home Page" element={<EditRole />} />
            <Route exact path="/users" name="Home Page" element={<Users />} />
            <Route exact path="/add-user" name="Home Page" element={<AddUser />} />
            <Route exact path="/edit-user/:id" name="Home Page" element={<EditUser />} />
            <Route exact path="/books" name="Home Page" element={<Books />} />
            <Route exact path="/add-book" name="Home Page" element={<AddBook />} />
            <Route exact path="/edit-book/:id" name="Home Page" element={<EditBook />} />
          </Routes>
        </Suspense>
       </BrowserRouter>
       <ToastContainer />
       </Provider>
    )
  }
}

export default App
