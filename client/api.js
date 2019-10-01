var fetchCows = {
  readAll: (cb) => {
    $.get({
      url: 'http://127.0.0.1:3000/api/cows',
      data: {},
      dataType: 'json'
    })
    .done((data) => {
      console.log('success');
      cb(data)
    })
    .fail(() => console.log('fail'));
  }
}

export default fetchCows;
