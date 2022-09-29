import {HideModalAction, ShowModalAction, Types} from './video-modal.constant';

export function showModal(): ShowModalAction {
  return {type: Types.SHOW_MODAL};
}

export function hideModal(): HideModalAction {
  return {type: Types.HIDE_MODAL};
}
