import React, { Component } from 'react'
import Articles from './Articles'
import Projects from './Projects'
import Profile from './Profile'
import Header from './Header'
import Contact from './Contact'

export default class HomePage extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Profile />
      </div>
    )
  }
}
