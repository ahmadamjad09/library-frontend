import {API_URL} from '../Api'
import axios from 'axios'
import { BOOK, BOOKS, ROLES,ROLE, USER, USERS } from '../types/types';
import { toast } from 'react-toastify';

 
export const rolesList = () => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/roles/list`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: ROLES,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: ROLES,
                    payload: []
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: ROLES,
                payload: []
              });
        })
    };
};

export const auth = (data,navigate) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.post(`${API_URL}/users/auth`,data).then((response)=>{
            if(response.data.success) {
                sessionStorage.setItem("token",response.data.response)
                toast.success("Login Successfull")
               navigate('/home')
            }    
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const usersList = () => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/users/list`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: USERS,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: USERS,
                    payload: []
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: USERS,
                payload: []
              });
        })
    };
};

export const authorsList = () => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/users/authors`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: USERS,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: USERS,
                    payload: []
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: USERS,
                payload: []
              });
        })
    };
};

export const booksList = () => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/books/list`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: BOOKS,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: BOOKS,
                    payload: []
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: BOOKS,
                payload: []
              });
        })
    };
};

export const getRole = (id) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/roles/${id}`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: ROLE,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: ROLE,
                    payload: {}
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: ROLE,
                payload: {}
              });
        })
    };
};

export const getUser = (id) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/users/${id}`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: USER,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: USER,
                    payload: {}
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: USER,
                payload: {}
              });
        })
    };
};

export const getBook = (id) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.get(`${API_URL}/books/${id}`,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                dispatch({
                    type: BOOK,
                    payload: response.data.response
                  });
            } else {
                dispatch({
                    type: BOOK,
                    payload: {}
                  });
            }
            
        }).catch((err)=>{
            console.log("err",err)
            dispatch({
                type: BOOK,
                payload: {}
              });
        })
    };
};

export const addRole = (data,navigate) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.post(`${API_URL}/roles/add`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                navigate('/roles')
            }
        }).catch((err)=>{
            console.log("err",err)
        })
    };
};

export const addUser = (data,navigate) => {
    return function (dispatch) {
        axios.post(`${API_URL}/users/add`,data).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                navigate('/users')
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const register = (data,navigate) => {
    return function (dispatch) {
        axios.post(`${API_URL}/users/add`,data).then((response)=>{
            if(response.data.success) {
                toast.success("User Registered")
                navigate("/")
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const login = (data) => {
    return function (dispatch) {
        axios.post(`${API_URL}/users/login`,data).then((response)=>{
            if(response.data.success) {
                sessionStorage.setItem("token",response.data.response)
                window.location.href='/users'
            }
        }).catch((err)=>{
            console.log("err",err.response.data.message)
        })
    };
};

export const addBook = (data,navigate) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.post(`${API_URL}/books/add`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                navigate('/home')
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};


export const editRole = (id,data,navigate) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.put(`${API_URL}/roles/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                navigate('/roles')
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};
export const blockUnblockRole = (id,data) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.patch(`${API_URL}/roles/blockUnblock/${id}`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                dispatch(rolesList())
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const blockUnblockUser = (id,data) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.patch(`${API_URL}/users/blockUnblock/${id}`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                dispatch(usersList())
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const editUser = (id,data,navigate) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.put(`${API_URL}/users/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                navigate('/users')
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const editBook = (id,data,navigate) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.put(`${API_URL}/books/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                navigate('/home')
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const blockUnblockBook = (id,data) => {
    return function (dispatch) {
        let token = sessionStorage.getItem("token")
        axios.patch(`${API_URL}/books/blockUnblock/${id}`,data,{
            headers:{
                "Authorization":token
            }
        }).then((response)=>{
            if(response.data.success) {
                toast.success(response.data.response)
                dispatch(booksList())
            }
        }).catch((err)=>{
            console.log("err",err)
            toast.error(err?.response?.data?.message)
        })
    };
};

export const logout = (data) => {
    return function (dispatch) {
        sessionStorage.removeItem("token")
        window.location.href='/'
    };
};