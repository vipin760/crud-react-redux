import React,{useEffect} from 'react'
import './App.css'
import Users from './component/user/user.component'
import Create from './component/create/Create.component'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';
import { useDispatch ,useSelector} from "react-redux"
import { getUser } from './redux/userSlice';
import { BASE_URI } from './share/url/constants';
import Edit from './component/update/edit.component';

const App = () => {
  const dispatch = useDispatch()
    useEffect(()=>{
        const fetchData =async()=>{
            try {
                const fetchData = await axios.get(`${BASE_URI}`);
                dispatch(getUser(fetchData.data.data))
            } catch (error) {
                alert(error)
            }
        } 
        fetchData()
    },[])
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Users/>} ></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
