import React from 'react'
import moment from 'moment'

export default function Card(props) {
  const date = moment(props.card.pubDate).format('MM/DD/YYYY');
  return (
    <>
       <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/4 h-auto md:h-64 flex justify-center items-center md:mb-8 left-article overflow-hidden">
            <img  src={props.card.thumbnail} alt=""/>
          </div>
  
          <div className="w-full md:w-3/4 right-article h-auto md:h-64 mb-8 py-6 md:py-0 flex justify-around flex-col">
            <div>
              <h3 className="text-xl md:text-3xl text-center main-font"><a className="text-black" href={props.card.guid} target="blank">{props.card.title}</a></h3>
              <h4 className="text-center mt-6 body-font">Published on: {date}</h4>
            </div>
              <div className="text-center">
              {props.card.categories.map((category, i) =>{
                return <span key={i} className="hidden my-1 body-font md:inline-block bg-blue-dark text-white px-3 py-2 border-4 border-black text-sm font-semibold mr-2">{category}</span>
              })}
              </div>
          </div>
       </div>
    </>
  )
}
