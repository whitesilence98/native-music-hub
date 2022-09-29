import {all} from 'redux-saga/effects';

import watchProductList from './modules/product-list/product-list.saga';
import watchPhoneList from './modules/phone-list/phone-list.saga';
import watchVideoModal from './modules/video-modal/video-modal.saga';

export default function* root() {
  yield all([watchProductList(), watchPhoneList(), watchVideoModal()]);
}
