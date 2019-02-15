import React from 'react'

export default function Contact() {
  return (
    <div className="w-2/5 my-8 text-center mx-auto shadow-md py-24">
      <h2 className="text-4xl">Want More?</h2>
      <h3 className="text-2xl font-normal">I'd love to chat!</h3>
      <div className="flex items-center justify-center"> 
        <i className="far fa-envelope text-3xl mr-2"></i>
        <a className="text-lg" href="mailto:matthewbasile2@gmail.com" target="_top"> matthewbasile2@gmail.com</a>
      </div>
     
    </div>
  )
}
