// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import App from './components/App';
// import reducers from './reducers';

// const store = createStore(reducers);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );


import ReactDOM from 'react-dom';
import indexJsx from './index.jsx';

ReactDOM.render(
  indexJsx(),
  document.querySelector('#root'),
);
