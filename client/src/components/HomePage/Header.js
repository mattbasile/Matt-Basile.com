import React from 'react'
import '../../App.css'

function Header(props) {
  return (
    <div className="w-full h-75 flex bg-pink">
      <div className=" w-1/2 flex flex-col justify-around items-center" >
          <div>
            <h1>Matt Basile</h1>
            <h2>Content Focused Developer</h2>
          </div>
          <div className="flex justify-between w-2/5 mx-auto">
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">My Story</button>
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">My Work</button>
         </div>
      </div>
      <div className=" w-1/2 "></div>
    </div>
  )
}



export default Header

