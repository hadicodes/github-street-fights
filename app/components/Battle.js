var React = require('react');


class PlayerInput extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: ''
    }
  }

  render() {
    return (
      <form className='column'>
        <label htmlFor="'username" className="header">{this.props.label}</label>
        <input type="text"
          id='username'
          placeholder='github username'
          autoComplete='off'
          value={this.state.username}
        />
      </form>
    )
}
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
      newState[`${id}name`] = username;
      newState[`${id}image`] = `https://github.com/${username}.png?size=200`;
      return newState;
  }))
}

  render() {
    let playerOneName = this.state.playerOneName;
    let playerTwoName = this.state.playerTwoName;

    return (
      <div>
        <div className="row">
          {!playerOneName && <PlayerInput
            id='playerOne'
            label='Player One'
            onSubmit={this.handleSubmit}
          />}
          {!playerTwoName && <PlayerInput
            id='playerTwo'
            label='Player Two'
            onSubmit={this.handleSubmit}
          />}
        </div>
      </div>
    )
  }
}

module.exports = Battle;