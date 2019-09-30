import CowList from './cowList.js';

var App = props => React.createElement("ul", null, props.cows.map(cow => React.createElement(CowList, {
  key: cow.id,
  cow: cow
})));

export default App;