import CowList from './cowList.js';
import Description from './description.js';
import fetchCows from '../api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({
      selectedCow: value
    });
  }

  componentDidMount() {
    console.log('All components are mounted');
    fetchCows.readAll().done(data => {
      this.setState({
        cows: data,
        selectedCow: data[0]
      });
    });
  }

  render() {
    return React.createElement("div", null, React.createElement(Description, {
      cow: this.state.selectedCow
    }), this.props.cows.map(cow => React.createElement(CowList, {
      key: cow.id,
      cow: cow,
      handleClick: this.handleClick
    })));
  }

}

;
export default App;