const client = require('./connection');

client.indices.create({
  index : 'products'
}, function(err, res, status){
  if(err) {
    console.log(err);
  }
  else {
    console.log("create", res);
  }
});
