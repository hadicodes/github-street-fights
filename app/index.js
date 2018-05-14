const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const PropTypes = require('prop-types');

const App = require('./components/App');

ReactDOM.render(<App />, document.getElementById('app'));

