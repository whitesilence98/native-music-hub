import {createSelector} from 'reselect';
import {IPhoneListState} from './phone-list.constant';

import {IState} from '@my-store/constants';

export const phoneListSelector = (state: IState) => {
  return state.phoneList;
};

export const loadingSelector = createSelector(
  phoneListSelector,
  (phoneList: IPhoneListState): any => phoneList.loading,
);
