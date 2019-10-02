var fetchCows = {
  readAll: () => {
    console.log("fetchCows readAll is invoked");
    return $.ajax({
      url: 'http://127.0.0.1:3000/api/cows',
      method: 'GET',
      data: {},
      contentType: 'json',
      success: data => {
        console.log('success');
        console.log(data);
        return data;
      },
      error: err => console.log('fail')
    });
  }
};
export default fetchCows;