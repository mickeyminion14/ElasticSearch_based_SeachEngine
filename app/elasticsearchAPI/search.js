const client = require('./connection');

client.search({

  index : 'products',
  type : 'window', 
  body : {
    query : {
      regexp: { "name": "sar.*" }
    },
  }

}, function (err, res, status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("<--Response-->");
    console.log(res);
    console.log("<--Hits-->");
    res.hits.hits.forEach(hit => {
      console.log(hit);
    });
  }
});