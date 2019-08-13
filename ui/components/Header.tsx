import React, { Component } from 'react'
import { AvailablePage } from '../reducers/view'
import { setPageActionCreatorType } from '../actions'

interface Props {
  page: AvailablePage
  setPage: setPageActionCreatorType
}

export class Header extends Component<Props> {
  render() {
    return (
      <div>
        <button onClick={() => this.props.setPage('home')}>
          {this.props.page === 'home' ? <b>Home</b> : <span>Home</span>}
        </button>
        <button onClick={() => this.props.setPage('shop')}>
          {this.props.page === 'shop' ? <b>Shop</b> : <span>Shop</span>}
        </button>
        <button onClick={() => this.props.setPage('about')}>
          {this.props.page === 'about' ? <b>About</b> : <span>About</span>}
        </button>
      </div>
    )
  }
}
