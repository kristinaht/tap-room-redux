import rootReducer from '../../reducers/index.js';

describe('rootReducer', () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null})).toEqual({
      masterWineBarrelList: {},
      formVisibleOnPage: false,
      selectedWineBarrel: null
    });
  });
})