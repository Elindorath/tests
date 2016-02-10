(function() {
  'use strict';

  function request(arg) {
    return new Promise(function(resolve, reject) {
      if (arg < 5)
        setTimeout(resolve.bind(Promise, 'Promise ' + arg + ' resolved'), arg * 1000);
      else
        setTimeout(reject.bind(Promise, 'Promise ' + arg + ' rejected'), arg * 1000);
    });
  }

  var promises = [];

  for (var i = 0; i < 10; i++) {
    promises.push(request(i)
      .then(function(res) {
        console.log(res);
        return res;
      }));
  }

  all(promises)
    .then(function(res) {
      console.log('Result: ', res);
    })
    .catch(function(e) {
      console.log('Error: ', e);
    });

  function all(array) {
    return new Promise(function(resolve, reject) {
    });
  }

})();
