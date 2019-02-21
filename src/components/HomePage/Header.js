import React from 'react'
import NavBar from "../NavBar";
import '../../App.css'

function Header(props) {
  return (
    <div className="w-full h-75 header">
        <NavBar/>
        <div className="flex flex-col header-text-container lg:mt-16 text-center justify-center items-center ">
            <h1 className="header-font">Matt Basile</h1>
            <h2 className="sub-header text-center">Content Focused Developer</h2>
         </div>
    </div>
  )
}



export default Header

