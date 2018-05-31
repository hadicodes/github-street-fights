const React = require('react');
const PropTypes = require('prop-types');
const api = require('../utils/api');

const SelectLanguage = props => {
  let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            style={
              lang === props.selectedLanguage ? { color: '#d0021b' } : null
            }
            key={lang}
            onClick={() => props.onSelect(lang)}
          >
            {lang}
          </li>
        );
      })}
    </ul>
  );
};

// RepoGrid.propTypes = {
//   repos: PropTypes.array.isRequired
// };

// SelectLanguage.propTypes = {
//   selectedLanguage: PropTypes.string.isRequired,
//   onSelect: PropTypes.func.isRequired
// };

// POPULAR Component
class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(lang) {
    this.setState({
      selectedLanguage: lang,
      repos: null
    });

    api.fetchPopularRepos(lang)
      .then(repos => console.log(repos))
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    );
  }
}

module.exports = Popular;
