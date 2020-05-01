import * as c from './../actions/actionTypes';

export default (state=null, action) => {
  const { id } = action;
  switch(action.type) {
    case c.SELECT_WINE_BARREL:
      const newState = { ...state};
      const selectedState = newState[id];
      return selectedState;
    default:
      return state;
  }
}