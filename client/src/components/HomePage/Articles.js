
import React, { Component } from 'react'
import Card from './Card'

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state={
            isArticle: true,
        }
    }
  render() {
    return (
        <div>
        <div className="w-3/5 mx-auto my-24">
          <h3 className="text-3xl" >Articles</h3>
          <p className="text-2xl">To help retain my studies I've been sharing blog posts on Medium.</p>
          <p className="text-2xl">Here are all my posts up to date:</p>
         <div className="flex mt-8">
             <Card isArticle={this.state.isArticle}/>
             <Card isArticle={this.state.isArticle}/>
             <Card isArticle={this.state.isArticle}/>
         </div>
        </div>
        </div>
    )
  }
}
