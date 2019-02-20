import React, { Component } from 'react'
import {connect} from 'react-redux'
import PhotoOne from '../imgs/guidr_screen.png'
import PhotoTwo from '../imgs/pokedex_screen.png'
import PhotoThree from '../imgs/dbz_screen.png'

class Projects extends Component {
  constructor(props){
    super(props)
    this.state={
      selected: this.props.projects[0],
    }
  }

  changeSelected = e =>{
    const newSelected = this.props.projects.find(project => e.target.innerText === project.title)
    this.setState({selected: newSelected})
    
  }
  render() {
  
    return (
      <div id="projects" className="w-4/5 mx-auto project-container flex">
      <div className="w-1/3 h-full flex flex-col items-center project-description-container leading-normal">
   
        <h3 className="text-3xl mt-8 sub-header">{this.state.selected.title}</h3>
        <p className="my-2 px-4">{this.state.selected.description}</p>
        <p className="my-2 px-4">{this.state.selected.takeaways}</p>
        <div className="flex flex-wrap px-4 my-4">
          {this.state.selected.tools.map(tool => <span class="mr-2 underline">{tool}</span>)}
        </div>
        <div className="flex text-5xl w-4/5 justify-center">
        <a target="blank" className="mx-2 text-blue-dark" href={this.state.selected.url}>
          <i className="fas fa-globe"></i>
        </a>
        <a target="blank" className="mx-2 text-blue-dark" href={this.state.selected.githubURL}>
          <i className="fab fa-github"></i>
        </a>
        </div>
      </div>
      <div className="w-2/3 right-project-container flex flex-col justify-between">
        <div className="h-auto  project-img-container flex justify-center items-center">
          <img src={this.state.selected.title === 'Guidr' ? PhotoOne : this.state.selected.title === 'Pokedex Redux' ? PhotoTwo : PhotoThree}/>
        </div>
        <div className="flex project-cubes">
          <div onClick={e=>this.changeSelected(e)}className={this.state.selected.title ==="Guidr" ? "selected-project w-1/3 flex justify-center items-center project-link project-link-text" : "w-1/3 flex justify-center items-center project-link project-link-text"}>
            Guidr
          </div>
          <div onClick={e=>this.changeSelected(e)} className={this.state.selected.title ==="Pokedex Redux" ? "selected-project w-1/3 flex justify-center items-center project-link project-link-text" : "w-1/3 flex justify-center items-center project-link project-link-text"}>
            Pokedex Redux
          </div>
          <div onClick={e=>this.changeSelected(e)} className={this.state.selected.title ==="DBZ Battles" ? "selected-project w-1/3 flex justify-center items-center project-link project-link-text" : "w-1/3 flex justify-center items-center project-link project-link-text"}>
            DBZ Battles
          </div>
        </div>

      </div>
    </div>
    )
  }
}



const mapStateToProps = (state) => ({
    projects: state.projects
})

const mapDispatchToProps = {
  
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Projects)