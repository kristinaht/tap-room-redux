export default (state={ selectedWineBarrel: null }, action) => {
  const { id } = action;
  switch(action.type) {
    case 'SELECT_WINE_BARREL':
      const newState = { ...state};
      const selectedState = newState[id];
      return selectedState;
  }
}