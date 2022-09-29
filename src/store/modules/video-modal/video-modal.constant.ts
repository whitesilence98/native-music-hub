export interface IVideoModalState {
  show: boolean;
}

export enum Types {
  SHOW_MODAL = '[VIDEO MODAL] SHOW_MODAL',
  HIDE_MODAL = '[VIDEO MODAL] HIDE_MODAL',
}

export interface ShowModalAction {
  type: typeof Types.SHOW_MODAL;
}

export interface HideModalAction {
  type: typeof Types.HIDE_MODAL;
}

export type Actions = ShowModalAction | HideModalAction;
