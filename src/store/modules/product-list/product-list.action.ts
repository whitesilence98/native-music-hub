import {
  Types,
  SetProductsAction,
  LoadProductsAction,
  SetLoadingAction,
} from './product-list.constant';

export function setProducts(count: number, products: any): SetProductsAction {
  return {type: Types.SET_PRODUCTS, payload: {count, products}};
}

export function loadProducts(): LoadProductsAction {
  return {type: Types.LOAD_PRODUCTS};
}

export function setLoading(loading: boolean): SetLoadingAction {
  return {type: Types.SET_LOADING, payload: {loading}};
}
