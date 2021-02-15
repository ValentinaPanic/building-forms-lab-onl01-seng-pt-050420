import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'


 
class BandsContainer extends Component {

  render() {
     {console.log(this.props.bands)}
    return(
      <div>
       <BandInput/>
       {/* {this.props.bands} */}
      </div>
    )
  }
}
const mapStateToProps = state =>{
  console.log(state.bands)
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps) (BandsContainer)
