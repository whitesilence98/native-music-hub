import {IProductListState} from './modules/product-list/product-list.constant';
import {IPhoneListState} from './modules/phone-list/phone-list.constant';
import {IVideoModalState} from './modules/video-modal/video-modal.constant';

export interface IState {
  productList: IProductListState;
  phoneList: IPhoneListState;
  videoModal: IVideoModalState;
}
