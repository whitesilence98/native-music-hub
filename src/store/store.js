import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import RootSaga from './sagas';

// Middleware: Redux Saga
let sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(sagaMiddleware);
// Redux: Store
let store = createStore(rootReducer, middleware);

// then run the saga
sagaMiddleware.run(RootSaga);

export default store;
