import Phone from '@models/phone.model';

export interface IPhoneListState {
  firstLoad: boolean;
  loading: boolean;
  data: Phone[];
  params: any;
}

export enum Types {
  SET_PHONES = '[PHONE LIST] SET_PHONES',
  LOAD_PHONES = '[PHONE LIST] LOAD_PHONES',
  SET_LOADING = '[PHONE LIST] SET_LOADING',
}

export interface LoadPhonesAction {
  type: typeof Types.LOAD_PHONES;
}

export interface SetPhonesAction {
  type: typeof Types.SET_PHONES;
  payload: {phones: Phone[]; count: number};
}

export interface SetLoadingAction {
  type: typeof Types.SET_LOADING;
  payload: {loading: boolean};
}

export type Actions = SetLoadingAction | SetPhonesAction | LoadPhonesAction;
