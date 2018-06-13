const React = require('react');

const Link = require('react-router-dom').Link;

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>Github Street Fights...battle other Github users.</h1>
        <Link className="button" to="/battle"> Battle </Link>
      </div>
    );
  }
}

module.exports = Home;
