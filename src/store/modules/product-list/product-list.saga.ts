import {put, select, takeLatest} from 'redux-saga/effects';
import {setLoading, setProducts} from './product-list.action';
import {Types} from './product-list.constant';
import {loadingSelector} from './product-list.selector';

function* watchLoadProducts() {
  let data: any = [];
  let count = 0;
  try {
    //@ts-ignore
    const loading = yield select(loadingSelector);
    if (!loading) {
      yield put(setLoading(true));
    }
  } catch (e) {
    console.log(
      'Nguyen C: ProductList.Saga.ts, F: watchLoadProducts, N: e ',
      e,
    );
  }

  yield put(setProducts(count, data));
}

export default function* root() {
  yield takeLatest(Types.LOAD_PRODUCTS, watchLoadProducts);
}
