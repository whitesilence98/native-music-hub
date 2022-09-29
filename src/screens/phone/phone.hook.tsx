import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loadPhones} from '@my-store/modules/phone-list/phone-list.action';
import {phoneListSelector} from '@my-store/modules/phone-list/phone-list.selector';

const usePhoneHook = () => {
  const {firstLoad} = useSelector(phoneListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!firstLoad) {
      return;
    }
    dispatch(loadPhones());
  }, [firstLoad, dispatch]);

  return {firstLoad};
};

export default usePhoneHook;
