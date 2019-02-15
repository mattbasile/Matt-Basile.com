import React from 'react'
import ProfileImg from '../../profile.png'

export default function Profile() {
  return (
    <div className="w-3/5 mx-auto"> 
      <h3 className="text-3xl" >Hello!</h3>
      <p className="text-2xl">I'm Matt, a New Yorker on a mission.</p>
      <p className="text-2xl">Formerly trained in content creation and now web development <br/> I'm here to bring a unique spark to your team.</p>
    <div className="flex mt-8">
        <div className="w-1/2">
        <img src={ProfileImg} alt=""/>
        </div>
        <div className="w-1/2 border border-blue">
            <div className="flex w-full justify-around h-12">
                <button className="border border-white w-full bg-blue text-white active">Developer</button>
                <button className="border border-white w-full bg-blue text-white">Content Creator</button>
                <button className="border border-white w-full bg-blue text-white">Person</button>
            </div>
            <div className="my-2">
                <h3 className="">What I do: </h3>
                <p >Text about what I do as a developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora? Similique voluptas illo facere? Odit eum omnis, suscipit natus quaerat consequatur, nulla dolor ducimus aliquam, atque in. Assumenda, distinctio fuga!</p>
            </div>
            <div className="my-2">
                <h3 className="">Tools I Use: </h3>
                <p>Text about what I do as a developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempora? Similique voluptas illo facere? Odit eum omnis, suscipit natus quaerat consequatur, nulla dolor ducimus aliquam, atque in. Assumenda, distinctio fuga!</p>
            </div>
        </div>
    </div>
    </div>
  )
}
