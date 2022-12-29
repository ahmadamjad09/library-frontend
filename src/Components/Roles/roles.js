/* eslint-disable */
import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {rolesList,blockUnblockRole} from '../../Redux/actions/action'
function Roles(props) {
    let navigate = useNavigate()
    useEffect(()=>{
        props.rolesList()
    },[])
    const handleBlockUnblock = (id,is_active) => {
        let data = {
            is_active:is_active == 1 ? 0 : 1
        }
        props.blockUnblockRole(id,data)
    }
    return (
        <div style={{margin:'5%'}}>
            <h1>Roles</h1>
            <button onClick={()=>navigate('/add-role')} style={{marginRight:'2px'}} type="button" className="btn btn-outline-success">Add</button>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Role</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    {props.roles && props.roles.length > 0 ? props.roles.map((role)=>{
                        return <tr>
                            <th scope="row">{role.role_id}</th>
                            <td>{role.role_name}</td>
                            <td>
                                <button onClick={()=>navigate(`/edit-role/${role.role_id}`)} style={{marginRight:'2px'}} type="button" className="btn btn-outline-primary">Edit</button>
                                <button onClick={()=>handleBlockUnblock(role.role_id,role.is_active)} type="button" className="btn btn-outline-primary">{role.is_active==1?"Active" : 'InActive'}</button>
                            </td>
                        </tr>
                    }): <p>Roles Not Found</p>}
                </tbody>
            </table>
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
      rolesList: () => {
        dispatch(rolesList());
      },
      blockUnblockRole:(id,data)=>{
        dispatch(blockUnblockRole(id,data))
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Roles);
