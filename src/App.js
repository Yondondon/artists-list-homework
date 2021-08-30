import React, { Component } from 'react'
import './App.scss'
import AppRoutes from './routes/AppRoutes/AppRoutes'

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppRoutes />
      </div>
    )
  }
}

export default App
