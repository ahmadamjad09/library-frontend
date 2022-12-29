/* eslint-disable */
import React,{useEffect, useState} from 'react'
import {useNavigate,useParams} from 'react-router-dom'
import { connect } from "react-redux";
import {editRole,getRole} from '../../Redux/actions/action'
function EditRole(props) {
    let navigate = useNavigate()
    let [name,setName] = useState('')
    const params = useParams();
    useEffect(()=>{
        props.getRole(params.id)
    },[])

    useEffect(()=>{
        setName(props.role?.role_name)
    },[props.role])

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            role_name:name
        }
        // let { id } = useParams();
        props.editRole(params.id,data,navigate)
    }

    const isDisabled = ()=>{
        return name == ''
    }
    return (
        <div style={{margin:"5%"}}>
            <h1>Add Role</h1>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Role Name</label>
                                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <button disabled={isDisabled()} onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                                &nbsp;<button onClick={()=> navigate("/roles")} className="btn btn-primary">Back</button>
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
        role: state.main.role
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getRole: (id) => {
        dispatch(getRole(id));
      },
      editRole: (id,data,navigate) => {
        dispatch(editRole(id,data,navigate));
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(EditRole);
