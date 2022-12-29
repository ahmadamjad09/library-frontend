/* eslint-disable */
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {addBook,authorsList} from '../../Redux/actions/action'
function AddBook(props) {
    let navigate = useNavigate()
    let [book_name,setBookName] = useState('')
    let [description,setDescription] = useState('')
    let [image,setImage] = useState('')
    let [author,setAuthor] = useState('')

    useEffect(()=>{
        props.authorsList()
    },[])

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = {
            book_name,
            description,
            author_id:author
        }
        props.addBook(data,navigate)
    }

    const isDisabled = ()=>{
        if(book_name == '' || description == '' || author == '') {
            return true
        } else {
            return false
        }
    }
    return (
        <div style={{margin:"5%"}}>
            <h1>Add Book</h1>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Book Name</label>
                                <input onChange={(e)=>setBookName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Description</label>
                                <input onChange={(e)=>setDescription(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        {/* <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Image</label>
                                <input onChange={(e)=>setImage(e.target.files)} type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Author</label>
                                <select onChange={(e)=>setAuthor(e.target.value)} className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                    <option>Select Author</option>
                                    {
                                        props.users && props.users.map((user)=>{
                                           return <option value={user.user_id}>{user.user_name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <button disabled={isDisabled()} onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                                &nbsp;<button onClick={()=>navigate('/home')} className="btn btn-primary">Back</button>
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
        users: state.main.users
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        authorsList: () => {
        dispatch(authorsList());
      },
      addBook:(data,navigate)=>{
        dispatch(addBook(data,navigate))
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(AddBook);