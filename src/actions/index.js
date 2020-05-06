import * as c from './actionTypes';

export const deleteWineBarrel = id => ({
  type: c.DELETE_WINE_BARREL,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addWineBarrel = (wineBarrel) => {
  const { name, origin, liters, id } = wineBarrel;
  return {
    type: 
    c.ADD_WINE_BARREL, 
    name: name, 
    origin: origin,
    liters: liters,
    id: id
  }
}
  export const sellWineBarrel = (id) => ({
    type: c.SELL_WINE_BARREL,
    id: id
  });

  export const selectWineBarrel = (wineBarrel) => {
    const { name, origin, liters, id} = wineBarrel;
    return {
      type: c.SELECT_WINE_BARREL,
      name: name,
      origin: origin,
      liters: liters,
      id: id
    }
  }

  export const unselectWineBarrel = () => ({
    type: c.UNSELECT_WINE_BARREL
  })
