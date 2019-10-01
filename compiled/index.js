import App from './components/app.js';
import fakedata from './data.js';
import fetchCows from './api.js';
fetchCows.readAll();
ReactDOM.render(React.createElement(App, {
  cows: fakedata
}), document.getElementById('app'));