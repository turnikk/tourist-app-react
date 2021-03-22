import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { save, load } from 'redux-localstorage-simple';
import rootSaga from './effects';
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
    applyMiddleware(save({ states: ['places.favorites'] })),
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
)(createStore);

const appStore = createStoreWithMiddleware(
    reducers,
    load({
        states: ['places.favorites']
    })
);

sagaMiddleware.run(rootSaga);

export default appStore;
