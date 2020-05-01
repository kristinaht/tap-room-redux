import * as actions from './../../actions';

describe('help queue actions', () => {
  it('deleteWineBarrel should create DELETE_WINE_BARREL action', () => {
    expect(actions.deleteWineBarrel(1)).toEqual({
      type: 'DELETE_WINE_BARREL',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
});