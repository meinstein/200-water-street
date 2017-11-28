import React, { Component } from 'react'

import Hours from './Hours'
import Minutes from './Minutes'
import './App.css'

class App extends Component {

  state = {
    h: null,
    m: null,
    s: null
  }

  componentDidMount() {
    setInterval(this._getTime, 1000)
  }

  _getTime = () => {
    const time = new Date()
    const hours = time.getHours()

    this.setState({
      h: hours > 12 ? hours - 12 : hours,
      m: time.getMinutes(),
      s: time.getSeconds()
    })
  }

  render() {
    return (
      <div className="Root-container">
        <Hours h={this.state.h} />
        <Minutes m={this.state.m} s={this.state.s} />
      </div>
    )
  }
}

export default App
