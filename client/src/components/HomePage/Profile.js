
import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProfileImg from '../../profile.png'


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
    console.log(e.target.parentNode)
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
          <div className="back flex flex-col justify-around items-center text-xl p-2">
            <p>{this.props.profile[0].WID}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap card-container mx-1">
        <div className="card shadow-lg" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2 className="text-center p-1">Content Creator</h2>
          </div>
          <div className="back flex flex-col justify-around items-center text-xl p-2">
            <p>{this.props.profile[1].WID}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap card-container mx-1">
        <div className="card shadow-lg" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2>Person</h2>
          </div>
          <div className="back flex flex-col justify-around items-center text-xl  p-2">
            <p>{this.props.profile[2].WID}</p>
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