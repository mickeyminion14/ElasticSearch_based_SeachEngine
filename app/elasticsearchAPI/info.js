var client = require('./connection');


client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'products',type: 'window'},function(err,resp,status) {  
  console.log(resp);
});