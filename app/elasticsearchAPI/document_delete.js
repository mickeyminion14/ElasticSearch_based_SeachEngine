const client = require('./connection.js');

client.delete({  
  index: 'products',
  type: 'window'
},function(err,res,status) {
    console.log(res);
});