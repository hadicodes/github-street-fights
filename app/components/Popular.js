const React = require('react');

const selectLanguage = (props) => {
  <ul className='languages'>
        {languages.map(lang => {
          return <li
            style={lang === props.selectedLanguage ? {color: '#d0021b'} : null}  
            key={lang}
            onClick={() => props.onSelect(lang)}
          >{lang}</li>
        })}
      </ul>
}

class Popular extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All'
    }
  }
  
  updateLanguage(lang) {
    this.setState({
    selectedLanguage: lang
  }) 
}

  render() {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <div>
        <selectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
