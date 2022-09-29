import {createSelector} from 'reselect';
import {IProductListState} from './product-list.constant';

import {IState} from '@my-store/constants';

export const productListSelector = (state: IState) => {
  return state.productList;
};

export const loadingSelector = createSelector(
  productListSelector,
  (productList: IProductListState): any => productList.loading,
);
