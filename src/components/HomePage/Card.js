import React from 'react'


export default function Card(props) {
  console.log(props)
  return (
    <>
       <div className="w-full flex">
          <div className="w-1/4 h-48 flex justify-center items-center my-8 left-article overflow-hidden">
            <img  src={props.card.thumbnail} alt=""/>
          </div>
  
          <div className="w-3/4 right-article h-48 my-8 flex justify-around flex-col">
              <h3 className="text-3xl text-center"><a className="text-black" href={props.card.guid} target="blank">{props.card.title}</a></h3>
              <div className="text-center">
              {props.card.categories.map(category =>{
                return <span className="my-1 inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{category}</span>
              })}
              </div>
          </div>
       </div>
    </>
  )
}
