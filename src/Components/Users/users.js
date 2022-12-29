/* eslint-disable */
import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {blockUnblockUser,usersList} from '../../Redux/actions/action'
function Users(props) {
    let navigate = useNavigate()
    useEffect(()=>{
        props.usersList()
    },[])
    return (
        <div style={{margin:'5%'}}>
            <h1>Users</h1>
            <button onClick={()=>navigate('/add-user')} style={{marginRight:'2px'}} type="button" className="btn btn-outline-success">Add</button>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Approval</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {props.users && props.users.length > 0 ? props.users.map((user)=>{
                        return <tr>
                        <th scope="row">{user.user_id}</th>
                        <td>{user.user_name}</td>
                        <td>{user.email}</td>
                        <td>{user.role_id?.role_name}</td>
                        <td>{user.is_active == 0 ? 'Pending' : 'Accepted'}</td>
                        <td>
                            <button onClick={()=>navigate(`/edit-user/${user.user_id}`)} style={{marginRight:'2px'}} type="button" className="btn btn-outline-primary">Edit</button>
                            <button onClick={()=>props.blockUnblockUser(user.user_id,{is_active:user.is_active == 1 ? 0 : 1})} type="button" className="btn btn-outline-primary">{user.is_active == 1 ? 'Block' : 'Un Block'}</button>
                        </td>
                    </tr>
                    }) : <p>No Users Found</p>}
                </tbody>
            </table>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.main.users
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      usersList: () => {
        dispatch(usersList());
      },
      blockUnblockUser:(id,data)=>{
        dispatch(blockUnblockUser(id,data))
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Users);