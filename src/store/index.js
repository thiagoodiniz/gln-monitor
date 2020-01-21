import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;