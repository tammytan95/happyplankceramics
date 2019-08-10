import { updateIn, set, setIn } from 'timm'

const initialState = {}

const transactions: (
  state: typeof initialState,
  { type, payload }
) => typeof initialState = (state = initialState, { type, payload }) => {
  let newState: typeof initialState

  switch (type) {
    default: {
      newState = state
    }
  }

  return newState
}
export default transactions
