/* eslint-disable */
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {addRole} from '../../Redux/actions/action'
function AddRole(props) {
    let navigate = useNavigate()
    let [name,setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let data = {
            role_name:name
        }
        props.addRole(data,navigate)
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
        roles: state.main.roles
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addRole: (data,navigate) => {
        dispatch(addRole(data,navigate));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(AddRole);
