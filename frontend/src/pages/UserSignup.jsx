import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const UserSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userData, setUserData] = useState({})
   


  const submitHandler = (e) => {
          e.preventDefault()

          setUserData({
            username:{
              firstName: firstName,
              lastName: lastName
                
            },
            email: email,
            password: password,
            
          })
         
          console.log(userData)
          setEmail('')
          setPassword('') 
          setFirstName('')
          setLastName('')
        
        }


  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
    <div>
    <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    <form onSubmit={(e) => {
          submitHandler(e)
    }}>


      <h3 className='text-lg font-medium mb-2'> What's your name</h3>
      <div className='flex gap-4 mb-6'>
      <input 
      required
      value={firstName}
      onChange={(e) => {
        setFirstName(e.target.value)
      }} 
      type="text" 
      placeholder="First Name" 
      className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-base"
      />
       <input 
      required 
       value = {lastName}
       onChange={(e) => {
        setLastName(e.target.value)
       }}
      type="text" 
      placeholder="Last Name" 
      className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
      />
      </div>

      <h3 className="text-lg font-base mb-2">What's your email</h3>
      <input 
      required 
      value={email}
      onChange={(e) => {
         setEmail(e.target.value)
      }}
      type="email" 
      placeholder="email@example.com" 
      className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
      />
      <h3 className="text-lg font-medium mb-2">Enter Password</h3>

      <input required type="password" placeholder="password"
      value = { password} 
      onChange={(e) => {        // this is called to way data binding, when the user types the password, it will be set to the password state

        setPassword(e.target.value)
      }}
       
        className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
      />
      <button 
      className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
      type="submit">Login</button>
    </form>

    <p className="text-center">Already have a account ? <Link to='/login ' className='text-blue-600'>Login Here</Link></p>
    </div>
    <div>
      <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, whatsApp or SMS messages, including by automated means, form 
         uber and affiliates to the number provided.</p>
    </div>
  </div>
  )
}

export default UserSignup