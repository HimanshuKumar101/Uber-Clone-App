import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {

  
  //the useState hook takes an initial value as an argument and returns an array with two elements: the current state value and a function to update it
  //binding the state variable to the input field allows you to update the state variable whenever the input field changes
  const [email, setEmail] = useState('')    //this is used to set the email state to the value of the input field
  const [password, setPassword] = useState('')  
  const [userData, setUserData] = useState({})

  const submitHandler = (e) => {
        e.preventDefault();

        setUserData({
          email:email,
          password: password
        })
        console.log(userData);
         setEmail('')   //this is used to set the email state to the value
         setPassword('') //this is used to set the password state to the value of the input field

  }


  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
      <div>
      <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
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
        type="email" 
        placeholder="email@example.com" 
        className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        />
        <h3 className="text-lg font-medium mb-2">Enter Password</h3>

        <input required type="password" placeholder="password" 
          value={password}                        
        onChange={(e) =>{                      //this is used to set the email state to the value of the input field  
          setPassword(e.target.value)            //e.target.value is the value of the input field e.target is the input field itself
        } }
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
        />
        <button 
        className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        type="submit">Login</button>
      </form>

      <p className="text-center">New Here ? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link
        to='/captain-login'
        className="bg-[#10b461] mb-5 flex items-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        type="submit" >Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
