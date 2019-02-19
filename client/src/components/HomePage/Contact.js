import React from 'react'

export default function Contact() {
  return (
    <div className="w-4/5 my-8 text-center mx-auto">
      <h2 className="text-4xl">Let's make something great together!</h2>
      <div className="flex w-3/5 mx-auto justify-around">
        <a href="#">
          <i className="text-5xl my-8 text-black far fa-envelope"></i>
        </a>
        <a href="#">
        <i className="text-5xl my-8 text-blue-light fab fa-twitter"></i>
        </a>
        <a href="#">
        <i className="text-5xl my-8 text-black fab fa-github"></i>
        </a>
      </div>
    </div>
  )
}
