import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewGetPageSelector } from '../reducers'
import { AvailablePage } from '../reducers/view'
import { setPageActionCreator, setPageActionCreatorType } from '../actions'

interface AppProps {
  page: AvailablePage
  setPage: setPageActionCreatorType
}

class _App extends Component<AppProps> {
  render() {
    return (
      <div>
        {this.props.page}
        <button onClick={() => this.props.setPage('cart')}>GO TO CART</button>
        <button onClick={() => this.props.setPage('shop')}>GO TO SHOP</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  page: viewGetPageSelector(state),
})

export default connect(
  // 1st parameter is called 'MapStateToProps'
  mapStateToProps,
  // 2nd parameter is called 'MapDispatchToProps'
  {
    setPage: setPageActionCreator,
  }
)(_App)
