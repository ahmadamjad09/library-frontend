import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {useNavigate} from 'react-router-dom'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { connect } from "react-redux";
import {register,rolesList} from '../../Redux/actions/action'
function Register(props) {
    let [user_name,setUserName] = useState('')
    let [email,setEmail] = useState('')
    let [password,setPassword] = useState('')
    let [role,setRole] = useState('')
    const navigate = useNavigate()
    React.useEffect(()=>{
        props.rolesList()
    },[])
    const handleSUbmit = (e)=>{
        e.preventDefault()
        let data = {
            user_name,
            email,
            password,
            role_id:role
        }
        props.addUser(data,navigate)
    }
    const isDisabled = ()=>{
        if(user_name == '' || email == '' || password == '') {
            return true
        } else {
            return false
        }
    }
    let roles = props.roles && props.roles.filter((role)=>role.role_id!=2)
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <CContainer>
                <CRow className="justify-content-center">
                <CCol md={8}>
                    <CCardGroup>
                    <CCard className="p-4">
                        <CCardBody>
                        <CForm>
                            <h1>Register</h1>
                            <p className="text-medium-emphasis">Sign Up to your account</p>
                            <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <CIcon icon={cilUser} />
                            </CInputGroupText>
                            <CFormInput onChange={(e)=>setUserName(e.target.value)} placeholder="Username" autoComplete="username" />
                            </CInputGroup>
                            <CInputGroup className="mb-3">
                            <CInputGroupText>
                                <CIcon icon={cilUser} />
                            </CInputGroupText>
                            <CFormInput onChange={(e)=>setEmail(e.target.value)} placeholder="Email" autoComplete="email" />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                            <CInputGroupText>
                                <CIcon icon={cilLockLocked} />
                            </CInputGroupText>
                            <CFormInput
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                            <select onChange={(e)=>setRole(e.target.value)} className="form-select" aria-label="Default select example">
                                <option value=''>Type</option>
                                {
                                    roles && roles.map((role)=>{
                                        return <option value={role.role_id}>{role.role_name}</option>
                                    })
                                }
                                
                            </select>
                            </CInputGroup>
                            <CRow>
                            <CCol xs={3}>
                                <CButton onClick={handleSUbmit} disabled={isDisabled()} color="primary" className="px-4">
                                    Register
                                    {/* <button disabled={isDisabled()} className='btn btn-primary' onClick={handleSUbmit}><span style={}>Register</span></button> */}
                                </CButton>
                            </CCol>
                            <CCol xs={3}>
                                <CButton color="primary" className="px-4">
                                    <Link style={{color:"#fff"}} to='/'>Back</Link>
                                </CButton>
                            </CCol>
                            </CRow>
                        </CForm>
                        </CCardBody>
                    </CCard>
                    </CCardGroup>
                </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        roles:state.main.roles
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (data,navigate) => {
        dispatch(register(data,navigate));
      },
      rolesList:()=>{
        dispatch(rolesList())
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Register);