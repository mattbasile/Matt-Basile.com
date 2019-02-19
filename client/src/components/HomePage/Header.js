import React from 'react'
import NavBar from "../NavBar";
import '../../App.css'

function Header(props) {
  return (
    <div className="w-full h-75 header">
        <NavBar/>
        <div className="flex flex-col mt-16 justify-center items-center h-auto">
            <h1 className="header-font">Matt Basile</h1>
            <h2 className="sub-header text-center">Content Focused Developer</h2>

          <div className="flex justify-around w-3/5 mt-8 mx-auto">
              <button className=" hover:text-white hover:bg-blue-dark font-bold py-4 px-12 text-xl rounded">My Story</button>
              <button className=" hover:text-white  hover:bg-blue-dark font-bold py-4 px-12 text-xl rounded">My Work</button>
         </div>
         </div>
    </div>
  )
}



export default Header

