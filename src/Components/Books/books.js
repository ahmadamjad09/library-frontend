/* eslint-disable */
import React from 'react'
import {useNavigate} from 'react-router-dom'
function Books() {
    let navigate = useNavigate()
    return (
        <div style={{margin:'5%'}}>
            <h1>Books</h1>
            <button onClick={()=>navigate('/add-book')} style={{marginRight:'2px'}} type="button" className="btn btn-outline-success">Add</button>
            <table className="table mb-5">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Author</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Author</td>
                        <td>
                            <button style={{marginRight:'2px'}} type="button" className="btn btn-outline-primary">Edit</button>
                            <button type="button" className="btn btn-outline-primary">Block</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Books