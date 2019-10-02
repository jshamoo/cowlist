import App from './components/app.js';
import fakedata from './data.js';
ReactDOM.render(React.createElement(App, {
  cows: fakedata
}), document.getElementById('app'));