import {put, select, takeLatest} from 'redux-saga/effects';

import {getCountryList} from '@services/phone.service';

import {setLoading, setPhones} from './phone-list.action';
import {Types} from './phone-list.constant';
import {loadingSelector} from './phone-list.selector';

function* watchLoadPhones() {
  let data: any = [];
  let count = 0;
  try {
    //@ts-ignore
    const loading = yield select(loadingSelector);
    if (!loading) {
      yield put(setLoading(true));
    }

    const res = getCountryList();

    data = res;
    count = res.length;
  } catch (e) {
    console.log('Nguyen C: PhoneList.Saga.ts, F: watchLoadPhones, N: e ', e);
  }

  yield put(setPhones(count, data));
}

export default function* root() {
  yield takeLatest(Types.LOAD_PHONES, watchLoadPhones);
}
