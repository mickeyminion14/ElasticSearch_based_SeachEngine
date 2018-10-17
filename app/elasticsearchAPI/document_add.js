const client = require('./connection');

client.index({
  index : 'products',
  type : 'window',
  body : {
    "name" : "gazal",
    "dimension": "200x200",
    "detail": "demo widow and some gazal and some lantern content"
  } 
}, function(err, res,status){
  console.log(res);
});