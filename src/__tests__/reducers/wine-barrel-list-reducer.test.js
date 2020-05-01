import wineBarrelListReducer from './../../reducers';

describe('wineBarrelListReducer', () => {
  test('Should redurn default state if there is no action type passed into the reducer', () => {
    expect(wineBarrelListReducer({}, { type: null })).toEqual({});
  });
});