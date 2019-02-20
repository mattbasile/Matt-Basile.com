import React, { Component } from 'react'
import {connect} from 'react-redux'



class Profile extends Component {
  constructor(props){
    super(props);
    this.state={
        selected: {...this.props.profile[0]},
    }
  }
  setSelected = e =>{
    e.preventDefault();
    const selected = this.props.profile.find(bio => bio.title === e.target.innerText);
    this.setState({selected: {...selected}})
  }
  rotateCard = e =>{
    e.target.parentNode.classList.toggle('isFlipped')
  }
 
  render() {
    return (
      <div id="profile" className="flex w-4/5 mx-auto my-24">
      <div className="flex  flex-wrap card-container mx-1">
        <div className="card shadow-lg" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl ">
            <h2>Developer</h2>
          </div>
        <div className="back flex flex-col justify-center items-center text-xl p-2">
            <p>{this.props.profile[0].WID}</p>
            <div className="flex justify-around w-2/5 mt-6 mx-auto">
              <a target="blank" href="https://github.com/mattbasile">
                <i className="fab fa-github text-5xl text-black hover:text-blue-dark"></i>
              </a>
              <a target="blank" href="https://medium.com/matts-lambda-minutes">
              <i className="fab fa-medium text-5xl text-black hover:text-blue-dark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap card-container mx-1">
        <div className="card shadow-lg" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2 className="text-center p-1">Content Creator</h2>
          </div>
           <div className="back flex flex-col justify-center items-center text-xl p-2">
            <p>{this.props.profile[1].WID}</p>
            <div className="flex justify-around w-2/5 mt-6 mx-auto">
              <a target="blank" href="https://twitter.com/mattcbasile">
                <i className="fab fa-twitter text-5xl text-black hover:text-blue-dark"></i>
              </a>
              <a target="blank" href="https://medium.com/matts-lambda-minutes">
              <i className="fab fa-medium text-5xl text-black hover:text-blue-dark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap card-container mx-1">
        <div className="card shadow-lg" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2>Person</h2>
          </div>
           <div className="back flex flex-col justify-center items-center text-xl p-2">
            <p>{this.props.profile[2].WID}</p>
            <div className="flex justify-around w-2/5 mt-6 mx-auto">
              <a  href="#">
                <i className="fas fa-football-ball text-5xl text-black hover:text-blue-dark"></i>
              </a>
              <a  href="#">
              <i className="fas fa-guitar text-5xl text-black hover:text-blue-dark"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profile
})

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile)