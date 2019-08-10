import { Action } from 'redux'
import { SET_PAGE } from '../konstants/view'
import { AvailablePage } from '../reducers/view'

export type ViewActionTypes = typeof SET_PAGE
export type ViewActions = setPageAction

// Generics
interface ViewAction<P, AT extends ViewActionTypes> extends Action<AT> {
  type: AT
  payload: P
}

type ViewActionCreator<P, AT extends ViewActionTypes> = (
  payload: P
) => ViewAction<P, AT>

// Action Creators -- these are functions that return "Actions"
export interface setPageAction
  extends ViewAction<AvailablePage, typeof SET_PAGE> {}

export type setPageActionCreatorType = ViewActionCreator<
  AvailablePage,
  typeof SET_PAGE
>

export const setPageActionCreator: setPageActionCreatorType = payload => ({
  type: SET_PAGE,
  payload,
})
