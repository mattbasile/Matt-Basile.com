import React from 'react'
import Project from './Card'
import {connect} from 'react-redux'

function Projects(props) {
  return (
      <>
    <div className="w-3/5 mx-auto my-24">
      <h3 className="text-3xl" >Projects</h3>
      <p className="text-2xl">At Lambda School I'm building something new every day.</p>
      <p className="text-2xl">Check out a few of my favorites here:</p>
     <div className="flex mt-8">
        {props.projects.map( project =>{
            return <Project card={project}/>
        })}
     </div>
    </div>
    </>
  )
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