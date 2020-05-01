import wineBarrelListReducer from './../../reducers/wine-barrel-list-reducer';
import * as c from './../../actions/actionTypes';

describe('wineBarrelListReducer', () => {

  let action;

  const currentState = {
    1: {
    name: 'Che non Che',
    origin: 'Istria',
    liters: '100',
    id: 1
    },
    2: {
    name: 'Smederevka',
    origin: 'Serbia',
    liters: '50',
    id: 1
    }
  }

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
      type: c.ADD_WINE_BARREL,
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

  test('Should successfully delete a wine barrel', () => {
    action = {
      type: c.DELETE_WINE_BARREL,
      id: 1
    } 
    expect(wineBarrelListReducer(currentState, action)).toEqual({
      2: {
        name: 'Smederevka',
        origin: 'Serbia',
        liters: '50',
        id: 1
        }
    })
  })
});