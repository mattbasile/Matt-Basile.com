
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
  activeClass = e =>{

  }
  render() {
    return (
    <div className="w-3/5 mx-auto mt-12"> 
      <h3 className="text-3xl">Hello!</h3>
      <p className="text-2xl">I'm Matt, a New Yorker on a mission.</p>
      <p className="text-2xl">Formerly trained in content creation and now web development <br/> I'm here to bring a unique spark to your team.</p>
      <div className="flex mt-8">
        <div className="w-1/2">
          <img src={ProfileImg} alt=""/>
        </div>
      <div className="w-1/2 border border-blue">
        <div className="flex w-full justify-around h-12">
          <button onClick={e=> this.setSelected(e)}className={this.state.selected.title === "Developer" ? "active border border-white w-full bg-blue text-white" : "border border-white w-full bg-blue text-white"}>Developer</button>
          <button onClick={e=> this.setSelected(e)} className={this.state.selected.title === "Content Creator" ? 'active border border-white w-full bg-blue text-white' : "border border-white w-full bg-blue text-white"}>Content Creator</button>
          <button onClick={e=> this.setSelected(e)} className={this.state.selected.title === "Person" ? 'active border border-white w-full bg-blue text-white' : "border border-white w-full bg-blue text-white"}>Person</button>
        </div>
        <div className="my-2">
          <h3 className="mx-auto w-90 text-2xl">What I do</h3>
          <p className="mx-auto w-4/5 leading-normal	">{this.state.selected.WID}</p>
        </div>
        <div className="my-2">
          <h3 className="">Tools I Use: </h3>
          <div className="flex flex-wrap">
          {this.state.selected.tools.map((tool, i) => {return i === this.state.selected.tools.length-1 ? <p className="mx-1">{tool}</p> : <p className="mx-1">{tool},</p> })}
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