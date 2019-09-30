import App from './components/app.js';
import data from './data.js';
ReactDOM.render(React.createElement(App, {
  cows: data
}), document.getElementById('app'));