import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/Postreducers';
import rootSaga from './sagas/index';

const logger = createLogger({
  collapsed: true,
});

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  const getMiddleware = () => {
    return applyMiddleware(sagaMiddleware, logger);
  };

  const store = createStore(
    reducer,
    getMiddleware(),
  );

  sagaMiddleware.run(rootSaga);


  return store;
}