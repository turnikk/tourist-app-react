import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from './effects';
// import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default appStore;
