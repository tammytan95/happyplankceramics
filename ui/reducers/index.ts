import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import view, * as fromView from './view'

const reducers = combineReducers({
  view,
})
export default reducers

/***********
 * BASE SELECTORS
 ***********/
export const viewGetPageSelector = state =>
  fromView.viewGetPageSelector(state.view)

/***********
 * TRANSFORMATION SELECTORS
 ***********/
