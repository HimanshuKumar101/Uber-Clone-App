import React from 'react'

const Home = () => {

  // This is the home page of the application. It contains a form to enter pick-up and drop-off locations.
  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      
      <div className='h-screen w-screen'>
          {/* image for temporary use */}

          <img className='h-full w-full object-cover' src = "https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="image"/>

      </div>
      <div className='bg-white absolute bottom-0 w-full p-5 '>
         <h4 className='text-2xl font-semibold'>Find a trip</h4>
         <form>
             <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location'/>
             <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='Enter your destination'/>
         </form>

      </div>
    </div>
  )
}

export default Home