import CowList from './cowList.js';

var App = (props) => (
  <ul>
    {props.cows.map(cow =>
      <CowList key={cow.id} cow={cow}/>)}
  </ul>
);

export default App;
