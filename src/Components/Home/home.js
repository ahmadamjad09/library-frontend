import React,{useEffect} from 'react'
import Card from '../card'
import {useNavigate} from 'react-router-dom'
import { connect } from "react-redux";
import {booksList,blockUnblockBook} from '../../Redux/actions/action'
import jwt_decode from 'jwt-decode'
function Home(props) {
    let navigate = useNavigate()
    useEffect(()=>{
        props.booksList()
    },[])
    let token = sessionStorage.getItem("token")
    let decode
    if(token) {
      decode = jwt_decode(token)
    }
    return (
        <div className='container mt-3'>
            {decode?.role_id != 4 && <button onClick={()=>navigate('/add-book')} style={{marginRight:'2px'}} type="button" className="btn btn-outline-success mb-2">Add</button>}
            <div className='row'>
                {props.books && props.books.length > 0 ? props.books.map((book)=>{
                    return <div className='col-lg-3 col-md-6 col-sm-12'>
                        <Card book={book} />
                    </div>
                }) : <p>Books Not Found</p>}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        books: state.main.books
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      booksList: () => {
        dispatch(booksList());
      },
      blockUnblockBook:(id,data)=>{
        dispatch(blockUnblockBook(id,data))
      }
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(Home);