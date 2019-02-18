
import React, { Component } from 'react'
import {connect} from 'react-redux'
import Card from './Card'
import {getArticles} from '../../actions'


class Articles extends Component {
    constructor(props){
        super(props);
        this.state={
            isArticle: true,
        }
    }
    componentDidMount(){
        this.props.getArticles();
    }
  render() {
    return (
        <div>
        <div className="w-3/5 mx-auto my-24">
         <div className="flex mt-8 flex-wrap">
         {this.props.articles.map( article =>{
            return <Card isArticle={this.state.isArticle} card={article}/>
        })}
         </div>
        </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    articles: state.articles
})

const mapDispatchToProps = {
  getArticles,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Articles)