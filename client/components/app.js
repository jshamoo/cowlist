import CowList from './cowList.js';
import Description from './description.js';
import fetchCows from '../api.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      selectedCow: this.props.cows[0]
      };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value){
    this.setState({ selectedCow: value});
  }

  componentDidMount() {
    console.log('All components are mounted');
    fetchCows.readAll()
      .done(()=> console.log("Hey~~~~~"));
  }


  render() {
    return (
      <div>
        <Description cow={this.state.selectedCow} />
        {this.props.cows.map((cow) =>
          <CowList key={cow.id} cow={cow} handleClick={this.handleClick} />
        )}
      </div>
    );
  }
};

export default App;
