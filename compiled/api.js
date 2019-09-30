var CowsManager = {
  readAll: cb => {
    $.get({
      url: '/api/cows',
      data: null,
      dataType: 'json'
    }).done(data => cb(data)).fail(console.log('request rejected'));
  },
  create: () => {}
};
export default CowsManager;