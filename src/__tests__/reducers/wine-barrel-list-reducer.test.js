import wineBarrelListReducer from './../../reducers/wine-barrel-list-reducer';

describe('wineBarrelListReducer', () => {

  let action;

  const wineBarrelData = {
    name: 'Che non Che',
    origin: 'Istria',
    liters: '100',
    id: 1
  };

  const { name, origin, liters, id} = wineBarrelData;

  test('Should redurn default state if there is no action type passed into the reducer', () => {
    expect(wineBarrelListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new wine barrel to masterBarrelList', () => {
    action = {
      type: 'ADD_WINE_BARREL',
      name: name,
      origin: origin,
      liters: liters,
      id: id
    }
    expect(wineBarrelListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        origin: origin,
        liters: liters,
        id: id
      }
    });
  });
});