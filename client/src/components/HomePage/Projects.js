import React from 'react'
import Logo1 from '../../logo-white-500.png'

export default function Projects() {
  return (
    <div className="w-3/5 mx-auto my-24">
      <h3 className="text-3xl" >Projects</h3>
      <p className="text-2xl">At Lambda School I'm building something new every day.</p>
      <p className="text-2xl">Check out a few of my favorites here:</p>
     <div className="flex mt-8">
         <div className="border shadow-md card">
            <h4 className="text-center py-4 text-3xl border borer-blue bg-blue text-white rounded rounded-b-none">Guidr</h4>
            <img src={Logo1} alt=""/>
            <div className="w-full self-end">
                <button className="mx-auto w-full h-12 bg-green">More</button>
                <div className="flex w-full h-12">
                    <button className="w-1/2 bg-orange">Live</button>
                    <button className="w-1/2 bg-purple">Code</button>
                </div>
            </div>
         </div>
         <div className="border shadow-md card">
            <h4 className="text-center py-4 text-3xl border borer-blue bg-blue text-white rounded rounded-b-none">Guidr</h4>
            <img src={Logo1} alt=""/>
            <div className="w-full self-end">
                <button className="mx-auto w-full h-12 bg-green">More</button>
                <div className="flex w-full h-12">
                    <button className="w-1/2 bg-orange">Live</button>
                    <button className="w-1/2 bg-purple">Code</button>
                </div>
            </div>
         </div>
         <div className="border shadow-md card">
            <h4 className="text-center py-4 text-3xl border borer-blue bg-blue text-white rounded rounded-b-none">Guidr</h4>
            <img src={Logo1} alt=""/>
            <div className="w-full self-end">
                <button className="mx-auto w-full h-12 bg-green">More</button>
                <div className="flex w-full h-12">
                    <button className="w-1/2 bg-orange">Live</button>
                    <button className="w-1/2 bg-purple">Code</button>
                </div>
            </div>
         </div>
         
     </div>
    </div>
  )
}
