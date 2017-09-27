import createHistory from 'history/createBrowserHistory';
import { createStore } from 'redux';
import rootReducer from '../reducers';

export const history = createHistory();

export function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState
    );
    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
