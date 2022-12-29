/* eslint-disable */
import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {addBook,authorsList} from '../../Redux/actions/action'
import { Formik } from 'formik';

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
            <Formik
       initialValues={{ book_name, description , author }}
       validate={values => {
        console.log("values",values)
         const errors = {};
         if (values.book_name == '') {
           errors.book_name = 'Required';
         } else if (
            values.description == ''
         ) {
           errors.description = 'Required';
         } else if (
            values.author == ''
         ) {
           errors.author = 'Required';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
            console.log("values",values)
            let {book_name,description,author} = values
            let data = {
                book_name,
                description,
                author_id:author
            }
            props.addBook(data,navigate)
       }}
     >
        {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
             <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Book Name</label>
                                <input name='book_name' onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {errors.book_name && touched.book_name && errors.book_name}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Description</label>
                                <input name='description' onChange={handleChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                {errors.description && touched.description && errors.description}
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
                                <select name='author' onChange={handleChange} className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
                                    <option>Select Author</option>
                                    {
                                        props.users && props.users.map((user)=>{
                                           return <option value={user.user_id}>{user.user_name}</option>
                                        })
                                    }
                                </select>
                                {errors.author && touched.author && errors.author}
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                                &nbsp;<button onClick={()=>navigate('/home')} className="btn btn-primary">Back</button>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
       )}
     </Formik>
           
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