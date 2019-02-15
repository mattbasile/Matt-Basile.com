import React from 'react'
import Logo1 from '../../logo-white-500.png'

export default function Project(props) {
  return (
    <>
       <div className="border shadow-md card">
            <h4 className="text-center py-4 text-3xl border borer-blue bg-blue text-white rounded rounded-b-none">Guidr</h4>
            <img src={Logo1} alt=""/>
            <div className="w-full self-end">
            {props.isArticle ? (<button className="mx-auto w-full h-12 bg-green">More</button>) 
            : ( <>
                <button className="mx-auto w-full h-12 bg-green">More</button>
                <div className="flex w-full h-12">
                    <button className="w-1/2 bg-orange">Live</button>
                    <button className="w-1/2 bg-purple">Code</button>
                </div>
                </>
                )
              }
            </div>
         </div>
    </>
  )
}
