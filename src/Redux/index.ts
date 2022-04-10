import {applyMiddleware, combineReducers, createStore} from 'redux';
import {UploadReducer} from './reducers';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({
  uploader: UploadReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunk));
