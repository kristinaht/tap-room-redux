import formVisibleReducer from './form-visible-reducer';
import wineBarrelListReducer from './wine-barrel-list-reducer';
import selectWineBarrelReducer from './select-wine-barrel-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  // formVisibleOnPage: formVisibleReducer,
  // masterWineBarrelList: wineBarrelListReducer,
  // selectedWineBarrel: selectWineBarrelReducer
});

export default rootReducer;