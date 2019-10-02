import App from './components/app.js';
import fetchCows from './api.js'; // import fakedata from './data.js';

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
$(document).ready(() => {
  $('#submit').click(e => {
    // e.preventDefault();
    // var data = JSON.stringify($('#form').serializeArray());
    var data = $('form').serialize();
    console.log('My form data', data);
    fetchCows.create(data);
  });
});