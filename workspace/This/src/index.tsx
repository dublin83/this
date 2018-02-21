import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hockey from './components/Hockey/Hockey';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hockey name={'Michael'}/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
