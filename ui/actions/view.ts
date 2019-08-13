import { Action } from 'redux'
import { SET_PAGE, SET_CURRENT_CATEGORY } from '../konstants/view'
import { AvailablePage, AvailableCategories } from '../reducers/view'

export type ViewActionTypes = typeof SET_PAGE | typeof SET_CURRENT_CATEGORY
export type ViewActions = setPageAction | setCurrentCategoryAction

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

export interface setCurrentCategoryAction
  extends ViewAction<AvailableCategories, typeof SET_CURRENT_CATEGORY> {}

export type setCurrentCategoryActionCreatorType = ViewActionCreator<
  AvailableCategories,
  typeof SET_CURRENT_CATEGORY
>

export const setCurrentCategoryActionCreator: setCurrentCategoryActionCreatorType = payload => ({
  type: SET_CURRENT_CATEGORY,
  payload,
})
