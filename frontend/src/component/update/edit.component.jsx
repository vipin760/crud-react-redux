import React from "react"
import { useState } from "react"
import { addUser, updateUser } from "../../redux/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { BASE_URI } from "../../share/url/constants"

function Edit(){
    const {id}=useParams();
    const users = useSelector(state=>state.users.users);

    const user = users.find(u=> u.id===id)
    const[ name, setName]=useState(user.name)
    const[email,setEmail]=useState(user.email)
    const[phone,setPhone]=useState(user.phone)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`${BASE_URI}/update/${id}`,{name, email,phone}).then((data)=>{
            dispatch(updateUser({id,name,email,phone}))
            navigate('/');
        }).catch((err)=>{
            alert(err)
        })
       }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3"> 
            <form onSubmit={handleSubmit}>
                <h2>Update User</h2>
                <div className="mb-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter Name" id="name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} autoComplete="name" />
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Enter Email" id="email"  className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off" />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" placeholder="Enter mobile" id="phone" className="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} autoComplete="off" />
                </div>
                <button className="btn btn-success">create</button>
            </form>
        </div>
    </div>
    )
}

export default Edit