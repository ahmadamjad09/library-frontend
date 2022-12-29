import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
import { cilLockLocked, cilUser } from '@coreui/icons'
import { connect } from "react-redux";
import {auth} from '../../Redux/actions/action'
const Login = (props) => {
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")
  let navigate = useNavigate()
const handleSubmit = (e) => {
  e.preventDefault()
  let data = {
    email,password
  }
  props.auth(data,navigate)
}

const isDisabled = ()=>{
  if(email == '' || password == '') {
    return true
  } else {
    return false
  }
}
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
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
                    <CRow>
                      <CCol xs={6}>
                        <CButton onClick={handleSubmit} disabled={isDisabled()} color="primary" className="px-4">
                            Login
                        </CButton>
                        {/* <CButton  color="primary" className="px-4">
                            <Link style={{color:"#fff"}} to='/home'>Home</Link>
                        </CButton> */}
                      </CCol>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4">
                            <Link style={{color:"#fff"}} to='/register'>Register</Link>
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Author Books</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    {/* <Link to="/dashboard">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Dashboard
                      </CButton>
                    </Link> */}
                  </div>
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

  };
};
const mapDispatchToProps = (dispatch) => {
  return {
      auth: (data,navigate) => {
      dispatch(auth(data,navigate));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);