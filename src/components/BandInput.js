// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBand } from './actions'
class BandInput extends Component {

  constructor(prop){
    super(prop)
    this.state = {
     name: ''
    }

  }
  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    console.log(addBand(this.state))
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange}
            type="text" name="name" value={this.state.name}/>
            <input type="submit"/>
        </form>
        
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  
  return {
    addBand: formData => dispatch({
      type: 'ADD_TODO',
      payload: formData})
    
  }

}
export default connect(null, mapDispatchToProps )(BandInput)
