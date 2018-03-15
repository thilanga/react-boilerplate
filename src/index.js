import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

const title = 'My minimal react webpack babel setup';

ReactDOM.render(<div>{title}</div>, document.getElementById('app'));

export default hot(module)(App);
