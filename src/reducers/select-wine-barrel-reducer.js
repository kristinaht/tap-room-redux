import * as c from './../actions/actionTypes';

export default (state=null, action) => {
  const { name, origin, liters, id} = action;
  switch(action.type) {
    case c.SELECT_WINE_BARREL:
      const newState = { 
        name: name,
        origin: origin,
        liters: liters,
        id: id
      };
      return newState;
    case c.UNSELECT_WINE_BARREL:
      return null;
    default:
      return state;
  }
}