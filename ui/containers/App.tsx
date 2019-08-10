import React, { Component } from 'react'
import { connect } from 'react-redux'

interface AppProps {}

class _App extends Component<AppProps> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <div>Hello this is App </div>
      </>
    )
  }
}

export default connect(
  state => ({}),
  {}
)(_App)
