const client = require('./connection');

client.indices.delete({index : 'products'}, function (err, res, status) {
  console.log("delete", res);
});