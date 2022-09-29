import {combineReducers} from 'redux';

import productList from './modules/product-list/product-list.reducer';
import phoneList from './modules/phone-list/phone-list.reducer';
import videoModal from './modules/video-modal/video-modal.reducer';

const rootReducer = combineReducers({
  productList,
  phoneList,
  videoModal,
});

export default rootReducer;
