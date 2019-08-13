import React, { Component } from 'react'
import { connect } from 'react-redux'
import { viewGetPageSelector } from '../reducers'
import { AvailablePage } from '../reducers/view'
import { setPageActionCreator, setPageActionCreatorType } from '../actions'
import { store } from '../index'
import { Header } from '../components/Header'
import { HomeView } from '../components/HomeView'
import { ShopView } from '../components/ShopView'
import { AboutView } from '../components/AboutView'

interface AppProps {
  page: AvailablePage
  setPage: setPageActionCreatorType
}

class _App extends Component<AppProps> {
  render() {
    const { page, setPage } = this.props

    return (
      <>
        <Header {...{ page, setPage }} />

        {page === 'home' ? (
          <HomeView />
        ) : page === 'shop' ? (
          <ShopView />
        ) : (
          <AboutView />
        )}
      </>
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
