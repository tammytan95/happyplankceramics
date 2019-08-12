import { updateIn, set, setIn } from 'timm'
import {
  PAGE,
  CURRENT_CATEGORY,
  CURRENT_PRODUCT_ID,
  SET_PAGE,
} from '../konstants/view'
import { ViewActions } from '../actions'
// Interfaces define the shape or potential properties that an object must assume
export type AvailablePage = 'home' | 'shop' | 'about' | 'productDetail' | 'cart'

interface View {
  [PAGE]: AvailablePage
  [CURRENT_CATEGORY]: string | undefined
  [CURRENT_PRODUCT_ID]: string | undefined
}

const initialState: View = {
  [PAGE]: 'home',
  [CURRENT_CATEGORY]: undefined,
  [CURRENT_PRODUCT_ID]: undefined,
}

// Functions can have types too. It's optional but it just makes it clear what the input and ouput type should be

//We create func called stringReverser, and we need to assign a type to the function, its input and output

// type stringReverserType = (inputString: string) => string

// const stringReverser: stringReverserType = inputString =>
//   inputString
//     .split('')
//     .reverse()
//     .join('')

// this is the same as
// stringRev(inputStr){
//   return inputStr.split.reverse.join ()
// }

// console.log(stringReverser(333))

// A reducer is a function that takes in state, makes a copy, makes changes, returns new state
const view: (state: View, action: ViewActions) => View = (
  state = initialState,
  action
) => {
  console.log(state, action)

  const type = action.type
  const payload = action.payload

  let newState: View

  switch (type) {
    case SET_PAGE: {
      newState = set(state, PAGE, payload)
      break
    }
    default: {
      newState = state
    }
  }

  console.log(newState)
  return newState
}

export const viewGetPageSelector: (state: View) => AvailablePage = state =>
  state[PAGE]

export default view
