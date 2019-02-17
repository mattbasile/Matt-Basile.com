import React from 'react'
import Logo1 from '../imgs/guidr_screen.png'
import Logo2 from '../imgs/pokedex_screen.png'
import Logo3 from '../imgs/dbz_screen.png'


export default function Card(props) {
  
  return (
    <>
       <div className="border shadow-md card">
            <h4 className="text-center flex justify-center items-center py-4 text-2xl border borer-blue bg-blue text-white rounded rounded-b-none">
              {props.card.title.length > 26 ? props.card.title.slice(0, 24) + "..." : props.card.title}
              
            </h4>
            <div className="card-img">
              <img src={props.isArticle ? props.card.thumbnail : props.card.title === "Guidr" ? Logo1 : props.card.title === "Pokedex Redux" ? Logo2 : Logo3} alt=""/>
            </div>
            <div className="w-full self-end">
            {props.isArticle ? (<a target="blank" href={props.card.link} className="flex items-center justify-center text-white w-full h-12 bg-green">More</a>) 
            : ( <>
                <button className="mx-auto w-full h-12 bg-green">More</button>
                <div className="flex w-full h-12">
                    <a href={props.card.url} target="blank" className="flex items-center justify-center text-white w-1/2 bg-orange">Live</a>
                    <a href={props.card.githubURL} target="blank" className="flex items-center justify-center text-white w-1/2 bg-purple">Code</a>
                </div>
                </>
                )
              }
            </div>
         </div>
    </>
  )
}
