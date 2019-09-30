import App from './components/app.js';
import data from './data.js';

ReactDOM.render(
  <App cows={data}/>,
  document.getElementById('app')
);
