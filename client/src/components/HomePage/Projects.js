import React from 'react'
import Project from './Card'
import {connect} from 'react-redux'

function Projects(props) {
  return (
      <>
    <div className="w-4/5 mx-auto border border-red project-container flex">
      <div className="w-1/3 h-full border border-black flex flex-col justify-between items-center">
      <div className="flex flex-col items-center project-description">
        <h3 className="text-3xl ">Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta culpa non a ex minus odio possimus dignissimos natus, deserunt reprehenderit expedita? Blanditiis quaerat impedit, minima dolores ab illo ratione?
        </p>
        </div>
        <div className="see-more">
        <button className=" py-6 rounded bg-blue">See More</button>
        </div>
      </div>
      <div className="w-2/3 flex flex-col justify-between">
        <div className="h-auto border border-purple project-img-container">
          <img/>
        </div>
        <div className="flex project-cubes">
          <div className="w-1/3 border border-blue flex justify-center items-center ">
            Project 2
          </div>
          <div className="w-1/3 border border-blue flex justify-center items-center">
            Project 3
          </div>
          <div className="w-1/3 border border-blue flex justify-center items-center">
            Project 4
          </div>
        </div>

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