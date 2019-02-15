import React from 'react'
import Logo1 from '../../logo-white-500.png'

export default function Card(props) {
  return (
    <>
       <div className="border shadow-md card">
            <h4 className="text-center flex justify-center items-center py-4 text-2xl border borer-blue bg-blue text-white rounded rounded-b-none">
              {props.card.title.length > 26 ? props.card.title.slice(0, 24) + "..." : props.card.title}
              
            </h4>
            <div className="card-img">
              <img src={props.card.thumbnail} alt=""/>
            </div>
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
