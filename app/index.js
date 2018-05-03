const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');
const PropTypes = require('prop-types');

class App extends React.Component {

  render() {

    return (
      <div>
        <p>Hello World!!!</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
