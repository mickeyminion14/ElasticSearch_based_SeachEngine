var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
const client = require('./elasticsearchAPI/connection');
router.use(bodyParser.urlencoded({
  'extended': 'true'
}));
router.use(bodyParser.json());

router.get('/', function (req, res) {
  res.sendFile(path.resolve('./public/views/index.html'));
});

router.post('/getdata', (req, res)=> {
console.log(req.body.search_input);

client.search({

  index : 'products',
  type : 'window', 
  body : {
    query : {
      regexp: { "name": req.body.search_input+".*" }
    },
  }

}, function (err, resp, status) {
  if(err) {
    console.log(err);
  }
  else {
    // console.log("<--Response-->");
    // console.log(res);
    // console.log("<--Hits-->");
    // res.hits.hits.forEach(hit => {
    //   console.log(hit);

    // });
    // if(resp.hits.hits.length<0) {
    //   res.send("hello");
    // }
    // else {
    res.send(resp.hits.hits);
    // }
  }
});

// res.send("hello");
});





module.exports = router;