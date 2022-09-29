import {
  Types,
  SetPhonesAction,
  LoadPhonesAction,
  SetLoadingAction,
} from './phone-list.constant';

export function setPhones(count: number, phones: any): SetPhonesAction {
  return {type: Types.SET_PHONES, payload: {count, phones}};
}

export function loadPhones(): LoadPhonesAction {
  return {type: Types.LOAD_PHONES};
}

export function setLoading(loading: boolean): SetLoadingAction {
  return {type: Types.SET_LOADING, payload: {loading}};
}
