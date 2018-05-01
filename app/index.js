var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello Sohi!</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));