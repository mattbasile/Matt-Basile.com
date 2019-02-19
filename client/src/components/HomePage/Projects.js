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
      <div className="w-4/5 mx-auto border border-red project-container flex">
      <div className="w-1/3 h-full border border-black flex flex-col justify-between items-center">
      <div className="flex flex-col items-center project-description">
        <h3 className="text-3xl ">{this.state.selected.title}</h3>
        <p>
          {this.state.selected.description}
        </p>
        </div>
        <div className="see-more">
        <button className=" py-6 rounded bg-blue">See More</button>
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <div className="h-auto border border-purple project-img-container flex justify-center items-center">
          <img src={this.state.selected.title === 'Guidr' ? PhotoOne : this.state.selected.title === 'Pokedex Redux' ? PhotoTwo : PhotoThree}/>
        </div>
        <div className="flex project-cubes">
          <div onClick={e=>this.changeSelected(e)}className="w-1/3 border border-blue flex justify-center items-center ">
            Guidr
          </div>
          <div onClick={e=>this.changeSelected(e)} className="w-1/3 border border-blue flex justify-center items-center">
            Pokedex Redux
          </div>
          <div onClick={e=>this.changeSelected(e)} className="w-1/3 border border-blue flex justify-center items-center">
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