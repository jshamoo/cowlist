import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './components/app.js';
import fetchCows from './api.js';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

$(document).ready(() => {
  $('#submit').click((e) => {
    // e.preventDefault();
    // var data = JSON.stringify($('#form').serializeArray());
    var data = $('form').serialize();
    console.log('My form data', data);
    fetchCows.create(data);
  });
});
