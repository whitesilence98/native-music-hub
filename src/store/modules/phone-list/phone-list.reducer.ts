import produce from 'immer';

import {Actions, IPhoneListState, Types} from './phone-list.constant';

const initialState: IPhoneListState = {
  data: [],
  firstLoad: true,
  loading: true,
  params: {
    page: 0,
    limit: 20,
    search: '',
  },
};

const reducer = produce((draft: any, action: Actions) => {
  switch (action.type) {
    case Types.SET_LOADING:
      draft.loading = action.payload.loading;
      break;
    case Types.LOAD_PHONES:
      draft.loading = true;
      break;
    case Types.SET_PHONES:
      draft.data = action.payload.phones;
      draft.loading = false;
      draft.firstLoad = false;
      break;
  }
}, initialState);

export {initialState, reducer as default};
