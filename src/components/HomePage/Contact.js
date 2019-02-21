import React from 'react'

export default function Contact() {
  return (
    <div id="contact" className="w-4/5 mt-48 text-center mx-auto bg-pink py-6 h-auto flex flex-col justify-between">
     <div>
      <h2 className="text-2xl md:text-4xl main-font">Let's make something great together!</h2>
      <div className="flex md:w-3/5 mx-auto justify-around">
        <a target="blank" href="mailto:matthewbasile2@gmail.com?Subject=Hey Matt! Just saw your Website...">
          <i className="text-3xl md:text-5xl my-8 far fa-envelope text-red-light hover:text-red "></i>
        </a>
        <a target="blank" href="https://twitter.com/mattcbasile">
        <i className="text-3xl md:text-5xl my-8 text-blue-light hover:text-blue-dark  fab fa-twitter"></i>
        </a>
        <a target="blank" href="https://github.com/mattbasile">
        <i className="text-3xl md:text-5xl my-8 text-purple-dark  hover:text-purple-darker fab fa-github"></i>
        </a>
        <a target="blank" href="https://www.linkedin.com/in/matthew-basile-070b279b/">
        <i className="text-3xl md:text-5xl my-8 text-blue-dark  hover:text-blue-darker fab fa-linkedin"></i>
        </a>
        <a target="blank" href="https://angel.co/matthew-basile">
        <i className="text-3xl md:text-5xl my-8 text-grey-dark hover:text-grey-darker fab fa-angellist"></i>
        </a>
      </div>
   </div> 
   <div className="body-font">
      <h3  className="mt-4 md:mt-12 mb-4">This site was made with <i className="heart fas fa-heart text-red-light"></i> by Matt Basile </h3>
      <p> {(new Date()).getFullYear()}  © Matt Basile. All Rights Reserved. </p>
   </div>
</div>
  )
}
