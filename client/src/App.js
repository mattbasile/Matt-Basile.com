import React, { Component } from 'react'
import { Route } from 'react-router'

import HomePage from './components/HomePage/HomePage'
import Project from './components/ProjectPage/Project'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/projects/:id" component={Project}/>
      </div>
    );
  }
}


export default App;
