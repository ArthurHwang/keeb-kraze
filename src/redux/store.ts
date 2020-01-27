import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./rootReducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
// import { fetchCollectionStart } from './shop/shopSagas';
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares: any = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : // @ts-ignore
      compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
