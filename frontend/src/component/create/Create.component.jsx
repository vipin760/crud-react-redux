import React, { useState } from "react";
import './Create.component.css'
import axios from "axios";
import { BASE_URI } from "../../share/url/constants";
import { addUser } from "../../redux/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Create=()=>{
    const[ name, setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()

    const dispatch = useDispatch();
    const navigate = useNavigate();
   const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post(`${BASE_URI}/create`,{name, email,phone}).then((data)=>{
        alert(data.data.message);
        dispatch(addUser(data.data.data))
        navigate('/');
    }).catch((err)=>{
        alert(err)
    })
   }
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3"> 
                <form onSubmit={handleSubmit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" id="name" className="form-control" onChange={(e)=>setName(e.target.value)} autoComplete="name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter Email" id="email"  className="form-control" onChange={(e)=>setEmail(e.target.value)} autoComplete="off" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" placeholder="Enter mobile" id="phone" className="form-control" onChange={(e)=>setPhone(e.target.value)} autoComplete="off" />
                    </div>
                    <button className="btn btn-success">create</button>
                </form>
            </div>
        </div>
    )
}

export default Create;