/* eslint-disable */
import React,{useEffect,useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { connect } from "react-redux";
import {editUser,rolesList,getUser} from '../../Redux/actions/action'
function EditUser(props) {
    let navigate = useNavigate()
    let [username,setUserName] = useState('')
    let [email,setEmail] = useState('')
    let [role,setRole] = useState('')
    const params = useParams();


    useEffect(()=>{
        props.getUser(params.id)
        props.rolesList()
    },[])

    useEffect(()=>{
        setUserName(props.user?.user_name)
        setEmail(props.user?.email)
        setRole(props.user?.role_id?.role_id)
    },[props.user])

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = {
            user_name:username,
            email,
            role_id:role
        }
        props.editUser(params.id,data,navigate)
    }

    const isDisabled = ()=>{
        if(username == '' || email == '' || role == '') {
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
                                <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Role</label>
                                <select onChange={(e)=>setRole(e.target.value)} className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                    <option value=''>Select Role</option>
                                    {
                                        props.roles && props.roles.length > 0 && props.roles.map((role1)=>{
                                            var selected = (role === role1.role_id) ? ' selected' : '';
                                            return <option value={role1.role_id} selected={selected}>{role1.role_name}</option>
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
        roles: state.main.roles,
        user:state.main.user
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      editUser: (id,data,navigate) => {
        dispatch(editUser(id,data,navigate));
      },
      rolesList: () => {
        dispatch(rolesList());
      },
      getUser: (id) => {
        dispatch(getUser(id));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(EditUser);