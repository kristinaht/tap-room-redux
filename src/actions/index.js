export const deleteWineBarrel = id => ({
  type: 'DELETE_WINE_BARREL',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const addWineBarrel = (wineBarrel) => {
  const { name, origin, liters, id } = wineBarrel;
  return {
    type: 'ADD_WINE_BARREL', 
    name: name, 
    origin: origin,
    liters: liters,
    id: id
  }
}
