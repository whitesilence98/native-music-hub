import produce from 'immer';

import {Actions, IVideoModalState, Types} from './video-modal.constant';

const initialState: IVideoModalState = {
  show: false,
};

const reducer = produce((draft: any, action: Actions) => {
  switch (action.type) {
    case Types.SHOW_MODAL:
      draft.show = true;
      break;
    case Types.HIDE_MODAL:
      draft.show = false;
      break;
  }
}, initialState);

export {initialState, reducer as default};
