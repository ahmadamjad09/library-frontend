/* eslint-disable */
import React,{useEffect,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {addUser,rolesList} from '../../Redux/actions/action'
function AddUser(props) {
    let navigate = useNavigate()
    let [username,setUserName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [role,setRole] = useState('')

    useEffect(()=>{
        props.rolesList()
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = {
            user_name:username,
            email,
            password,
            role_id:role
        }
        props.addUser(data,navigate)
    }

    const isDisabled = ()=>{
        if(username == '' || email == '' || password == '' || role == '') {
            return true
        } else {
            return false
        }
    }

    return (
        <div style={{margin:"5%"}}>
            <h1>Add User</h1>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">User Name</label>
                                <input onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Password</label>
                                <input onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Role</label>
                                <select onChange={(e)=>setRole(e.target.value)} className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                    <option value=''>Select Role</option>
                                    {
                                        props.roles && props.roles.length > 0 && props.roles.map((role)=>{
                                            return <option value={role.role_id}>{role.role_name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <button onClick={handleSubmit} disabled={isDisabled()} type="submit" className="btn btn-primary">Submit</button>
                                &nbsp;<button onClick={()=>navigate('/users')} className="btn btn-primary">Back</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        roles: state.main.roles
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addUser: (data,navigate) => {
        dispatch(addUser(data,navigate));
      },
      rolesList: () => {
        dispatch(rolesList());
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(AddUser);