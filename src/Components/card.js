import React from 'react'
// import Modal from './modal'
import Modal from 'react-modal';
import { API_URL } from '../Redux/Api';
import {useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode";

function Card(props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate()
    let token = sessionStorage.getItem("token")
    let decoded
    if(token) {
        decoded = jwt_decode(token)
    }
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
   return (
    <div className="card" style={{width:'18rem'}}>
        {/* <img src={`${API_URL}/props.book?.image`} className="card-img-top" alt="..." /> */}
        <div className="card-body">
            <p className="card-text">{props.book?.book_name}</p>
        </div>
        <button onClick={()=>setIsOpen(true)} type='button' className='btn btn-primary m-2' data-coreui-toggle="modal" data-coreui-target="#staticBackdrop">Details</button>
        { (decoded?.role_id == 3 || decoded?.role_id==2) &&
            <button onClick={()=>navigate(`/edit-book/${props.book?.book_id}`)} type='button' className='btn btn-primary m-2' data-coreui-toggle="modal" data-coreui-target="#staticBackdrop">Edit</button>
        }
        {/* <button onClick={()=>setIsOpen(true)} type='button' className='btn btn-primary m-2' data-coreui-toggle="modal" data-coreui-target="#staticBackdrop">Block</button> */}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Title: {props.book?.book_name}</h5>
                    </div>
                    <div className="modal-body">
                        Description: {props.book?.description}
                    </div>
                    <div className="modal-body">
                       Author:  {props.book?.author_id?.user_name}
                    </div>
                    <div className="modal-footer">
                        <button onClick={closeModal} type="button" className="btn btn-secondary" data-coreui-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
      </Modal>
        {/* <Modal /> */}
        {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-coreui-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    ...
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-coreui-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div> */}
    </div>
   ) 
}

export default Card