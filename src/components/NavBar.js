import React from 'react'

export default function NavBar() {
  return (
    <div className="flex w-full h-24 justify-around md:justify-end items-center">
      <a className="mx-2 md:mx-4 text-xl text-black hover:underline no-underline font-bold" href="#profile">Profile</a>
      <a className="mx-2 md:mx-4 text-xl text-black hover:underline no-underline font-bold" href="#projects">Projects</a>
      <a className="mx-2 md:mx-4 text-xl text-black hover:underline no-underline font-bold" href="#articles">Articles</a>
      <a className="mx-2 md:mx-4 text-xl text-black hover:underline no-underline font-bold" href="#contact">Contact</a>
    </div>
  )
}
