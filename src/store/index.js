import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './effects';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const appStore = createStore(
    reducers,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);
sagaMiddleware.run(rootSaga);

export default appStore;
