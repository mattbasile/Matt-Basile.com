import React from 'react'
import moment from 'moment'

export default function Card(props) {
  console.log(props.card.pubDate)
  const date = moment(props.card.pubDate).format('MM/DD/YYYY');
  console.log(date)
  return (
    <>
       <div className="w-full flex">
          <div className="w-1/4 h-64 flex justify-center items-center mb-8 left-article overflow-hidden">
            <img  src={props.card.thumbnail} alt=""/>
          </div>
  
          <div className="w-3/4 right-article h-64 mb-8 flex justify-around flex-col">
            <div>
              <h3 className="text-3xl text-center"><a className="text-black" href={props.card.guid} target="blank">{props.card.title}</a></h3>
              <h4 className="text-center mt-6">Published on: {date}</h4>
            </div>
              <div className="text-center">
              {props.card.categories.map(category =>{
                return <span className="my-1 inline-block bg-blue-dark text-white px-3 py-2 border-4 border-black text-sm font-semibold mr-2">{category}</span>
              })}
              </div>
          </div>
       </div>
    </>
  )
}
