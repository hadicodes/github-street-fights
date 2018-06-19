var React = require('react');

class Battle extends React.Component {
  constructor(props) {
    super(props);

    thi.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImage: null,
      playerTwoImage: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleSubmit(id, username) {
    this.setState((() => {
      let newState = {};
  }))
}

  render() {
    return (
      <div>

      </div>
    )
  }
}

module.exports = Battle;