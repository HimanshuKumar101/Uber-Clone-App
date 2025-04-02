import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Captainlogin = () => {

  //the useState hook takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it
    //binding the state variable to the input field allows you to update the state variable whenever the input field changes
    const [email, setEmail] = useState('')    //this is used to set the email state to the value of the input field
    const [password, setPassword] = useState('')  
    const [captainData, setCaptainData] = useState('')
  
    const submitHandler = (e) => {
          e.preventDefault();
  
          setCaptainData({
            email:email,
            password: password
          })
           setEmail('')   //this is used to set the email state to the value
           setPassword('') //this is used to set the password state to the value of the input field
  
    }
  

  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
    <div>
    <img className='w-20 mb-2' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    <form onSubmit={(e) => {
      submitHandler(e)
    }}>
      <h3 className="text-lg font-medium mb-2">What's your email</h3>
      <input 
      required 
      value={email}                        
      onChange={(e) =>{                      //this is used to set the email state to the value of the input field  
        setEmail(e.target.value)            //e.target.value is the value of the input field e.target is the input field itself
      } }
      className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
      type="email" 
      placeholder="email@example.com" 
      />
      <h3 className="text-lg font-medium mb-2">Enter Password</h3>

      <input 
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        value={password}                        
        onChange={(e) => {                      //this is used to set the email state to the value of the input field  
        setPassword(e.target.value)            //e.target.value is the value of the input field e.target is the input field itself
      } }
       required type="password" 
       placeholder="password" 
      />

      <button 
      className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
      type="submit">Login</button>
    </form>

    <p className="text-center">Join a fleet ? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
    </div>
    <div>
      <Link
      to='/login'
      className="bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
      type="submit" >Sign in as User</Link>
    </div>
  </div>
  )
}

export default Captainlogin 