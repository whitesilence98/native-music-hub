import {IState} from '@my-store/constants';

export const videoModalSelector = (state: IState) => {
  return state.videoModal;
};
