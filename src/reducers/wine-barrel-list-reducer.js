export default (state={}, action) => {
  const { name, origin, liters, id} = action;
  switch(action.type) {
    case 'ADD_WINE_BARREL':
      return Object.assign({}, state, {
       [id]: {
        name: name,
        origin: origin,
        liters: liters,
        id: id
      }
    });
    case 'DELETE_WINE_BARREL': 
      const newState = { ...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};