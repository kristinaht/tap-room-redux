import rootReducer from '../../reducers/index.js';
import { createStore } from 'redux';
import formVisibleReducer from './../../reducers/form-visible-reducer';
import wineBarrelListReducer from './../../reducers/wine-barrel-list-reducer';

describe('rootReducer', () => {

  let store = createStore (rootReducer);
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterWineBarrelList: {},
      formVisibleOnPage: false,
      // selectedWineBarrel: null
    });
  });

  test('Check that initial state of wineBarrelListReducer matches root reducer', () => {
    expect(store.getState().masterWineBarrelList).toEqual(wineBarrelListReducer(undefined, { type: null}));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of wineBarrelListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_TICKET',
      name: 'Smederevka',
      origin: 'Serbia',
      liters: '30',
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterWineBarrelList).toEqual(wineBarrelListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM',
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
})