
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
      <div className="flex w-3/5 mx-auto my-24">
      <div className="flex flex-wrap card-container mx-1">
        <div className="card" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2>Developer</h2>
          </div>
          <div className="back flex justify-center items-center text-xl">
            <p>Description</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap card-container mx-1">
        <div className="card" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2 className="text-center p-1">Content Creator</h2>
          </div>
          <div className="back flex justify-center items-center text-xl">
            <p>Description</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap card-container mx-1">
        <div className="card" onClick={e=>this.rotateCard(e)}>
          <div className="front flex justify-center items-center text-2xl">
            <h2>Person</h2>
          </div>
          <div className="back flex justify-center items-center text-xl">
            <p>Description</p>
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