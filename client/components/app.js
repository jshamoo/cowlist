import CowList from './cowList.js';
import Description from './description.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCow: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value){
    console.log('test',value);
    this.setState({ selectedCow: value});
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
