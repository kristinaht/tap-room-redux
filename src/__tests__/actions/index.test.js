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

  it('addWineBarrel should create ADD_WINE_BARREL action', () => {
    expect(actions.addWineBarrel({name: 'Sassicaia', origin: 'Tuscany', liters: '75', id:1})).toEqual({
      type: 'ADD_WINE_BARREL', 
      name: 'Sassicaia', 
      origin: 'Tuscany',
      id: 1
    });
  });
});