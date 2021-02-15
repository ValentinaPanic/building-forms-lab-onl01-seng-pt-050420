import React, { Component } from 'react'
class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    console.log(this.state)
    
    e.preventDefault()
    this.props.addBand(this.state)
    

    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}
export default BandInput