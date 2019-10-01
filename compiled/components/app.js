import CowList from './cowList.js';
import Description from './description.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCow: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    console.log('test', value);
    this.setState({
      selectedCow: value
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