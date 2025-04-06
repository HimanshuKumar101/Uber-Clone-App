import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {

  return (
    <div>
    
        <div className=' bg-cover bg-bottom bg-[url(https://images.unsplash.com/photo-1572239780645-203c467a49b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white pb-7 py-4 px-4'>
               
               <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
               <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>

            </div>

               
        </div>
    
    </div>
  )
}

export default Start