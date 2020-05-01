import selectWineBarrelReducer from './../../reducers/select-wine-barrel-reducer';
import * as c from './../../actions/actionTypes';


describe('selectWineBarrelReducer', () => {
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
  };
  
  let action;

  test('Should successfully select a wine barrel', () => {
    action = {
      type: c.SELECT_WINE_BARREL,
      id: 1
    }
  expect(selectWineBarrelReducer(currentState, action)).toEqual({
    name: 'Che non Che',
    origin: 'Istria',
    liters: '100',
    id: 1
    })
  })

})