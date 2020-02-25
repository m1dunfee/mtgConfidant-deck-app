import { createStore, applyMiddleware } from 'redux';
import sagas from 'redux-saga';
import root from './redux/reducers';

export default function configureStore(initialState={}) {
    return createStore(
      root,
      initialState,
      applyMiddleware(sagas)
    );
   }