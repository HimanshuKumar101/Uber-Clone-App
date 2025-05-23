import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const UserLogout = () => {
 
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
 
  //here we are sending the token to the backend to logout the user
  axios.post(`${import.meta.env.VITE_API_URL}/users/logout`, { 

    headers: {
        Authorization: `Bearer ${token}`
    }
  }).then((response) => {

    if( response.status === 200){
        localStorage.removeItem('token')
        navigate('/login')
    }

})
   

  return (
    <div>UserLogout</div>
  )
}


export default UserLogout