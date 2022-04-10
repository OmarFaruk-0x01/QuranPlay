import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {RootState} from '../Redux';

const useOwnDispatch = (reducerName: string, actions: any) => {
  const state = useSelector((state: RootState) => state[`${reducerName}`]);
  const dispatch = useDispatch();
  const dispatchFunctions = bindActionCreators(actions, dispatch);

  return {state, dispatchFunctions};
};

export default useOwnDispatch;
