import React, { Component } from 'react';

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
    this.props.history.push('/Planner')
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

export default PlanSize