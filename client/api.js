import $ from 'jquery';

var fetchCows = {
  readAll: () => {
    // console.log("fetchCows readAll is invoked");
    return $.ajax({
      url: 'http://127.0.0.1:3000/cows',
      method: 'GET',
      data: {},
      contentType: 'json',
      success: (data) => {
        // console.log('success');
        // console.log(data);
        return data;
      },
      error: (err) => console.log('fail')
    });
  },
  create: (data) => {
    // console.log("fetchCows create is invoked");
    $.ajax({
      url: 'http://127.0.0.1:3000/create',
      method: 'POST',
      data: data,
      processData: false,
      enctype: 'multipart/form-data',
      success: (data) => {
        console.log('You added a new cow!');
      },
      error: (err) => {
        console.log('moo', err);
      }
    });

  }

};

export default fetchCows;
