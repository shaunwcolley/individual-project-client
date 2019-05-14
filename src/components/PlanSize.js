import React, { Component } from 'react';
import { connect } from 'react-redux'

class PlanSize extends Component {
  constructor() {
    super()
    this.state = {
      width: 4,
      height: 10,
    }
  }
  handleNumberChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value)
    })
  }

  handleSaveSizeClick = () => {
    let dimensions = this.state
    this.props.onSizeSave(dimensions)
    this.props.history.push('/planner')
  }
  render() {
    return(
      <div>
        <p>
        <input type="number" name="width" onChange={this.handleNumberChange} step="1" placeholder="width" /> feet by
        <input type="number" name="height" onChange={this.handleNumberChange} step="1" placeholder="height" /> feet
        </p>
        <button onClick={this.handleSaveSizeClick}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSizeSave: (dimensions) => dispatch({type: 'SIZE_SAVE', dimensions: dimensions})
  }
}

export default connect(null,mapDispatchToProps)(PlanSize)
