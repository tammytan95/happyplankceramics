import { combineReducers } from 'redux'
import { createSelector } from 'reselect'
import transactions, * as fromTransactions from './transactionsAccounts'

const reducers = combineReducers({
  transactions,
})
export default reducers

/***********
 * BASE SELECTORS
 ***********/

/***********
 * TRANSFORMATION SELECTORS
 ***********/
