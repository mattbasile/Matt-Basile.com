import React from 'react'
import '../../App.css'

function Header(props) {
  return (
    <div className="w-full h-75 flex justify-center items-center header">
          <div>
          <div>
            <h1 className="header-font ">Matt Basile</h1>
            <h2 className="sub-header text-center">Content Focused Developer</h2>
          </div>
          <div className="flex justify-between w-3/5 mt-8 mx-auto">
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-4 px-12 text-xl rounded">My Story</button>
              <button className="bg-blue hover:bg-blue-dark text-white font-bold py-4 px-12 text-xl rounded">My Work</button>
         </div>
         </div>
    </div>
  )
}



export default Header

