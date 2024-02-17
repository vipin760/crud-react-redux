import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from 'react-redux';
import './user.component.css'
import axios from 'axios';
import { BASE_URI } from '../../share/url/constants';
import { deleteUser } from '../../redux/userSlice';

function Users (){
    const users = useSelector(state=>state.users.users)
    const dispatch = useDispatch()
   const handleDelete=(id)=>{
        axios.delete(`${BASE_URI}/delete/${id}`).then((data)=>{
            dispatch(deleteUser({id}));
            alert(data.data.message);
        }).catch((err)=>{
            console.log(err);
        })
    }

    const confirmDelete=(id)=>{
        const result = confirm("are you sure delete..?");
        if(result){
            handleDelete(id)
        }else{
            alert("delete cancelled")
        }
    }
    return(
        <div className='d-flex vh-100 bg-info justify-content-center'>
            <div className='container bg-primary p-5 text-light'>
            <Link to="/create" className='btn btn-success btn-sm w-25'>Add +</Link>
                <div className='row'>
                    <table className='table-responsive'>
                       <thead>
                       <tr>
                           <th>No:</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                       </thead>
                       <tbody>
                        {
                            users.map((user,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td className='d-flex align-items-center'>
                                        <Link to={`/edit/${user.id}`} className='btn btn-sm btn-success px-3 '>Edit</Link>
                                        <button onClick={()=>confirmDelete(user.id)} className='btn btn-sm btn-danger' >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                       </tbody>
                    </table>
                </div>
            </div>
        </div>
        // <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        // <div className='w-50 bg-white rounded'>
        //     <Link to="/create" className='btn btn-success btn-sm w-25 m-3'>Add +</Link>
        //     <table className='table-responsive m-5'>
        // <thead>
        //     <tr>
        //         <th>No:</th>
        //         <th>Name</th>
        //         <th>Email</th>
        //         <th>phone</th>
        //         <th>Action</th>
                
        //     </tr>
        // </thead>
        // <tbody>
        //     {
        //         users.map((user,index)=>(  
        //             <tr key={index}>
        //                 <td>{index+1}</td>
        //                 <td>{user.name}</td>
        //                 <td>{user.email}</td>
        //                 <td>{user.phone}</td>
        //                 <td>
        //                     <Link to={`/edit/${user.id}`} className='btn btn-sm btn-success px-3'>Edit</Link>
        //                     <button onClick={()=>confirmDelete(user.id)} className='btn btn-sm btn-danger' >Delete</button>
        //                 </td>
        //             </tr>
        //         ))
        //     }
        // </tbody>
        //     </table>
        // </div>
        // </div>
    );
}

export default Users