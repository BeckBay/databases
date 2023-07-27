var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll()
      .then(data =>{
        res.end(JSON.stringify(data));
      })
      .catch(err =>{
        res.writeHead(404, {'Content-type': 'text'});
        res.end(err);
      });
  },
  post: function (req, res) {
    let post = req.body;
    // console.log('this is data:', body);
    // console.log('this is res:', req.body);
    models.messages.create(post)
      .then(data =>{
        res.end(JSON.stringify(data));
      })
      .catch(err =>{
        res.writeHead(404, {'Content-type': 'text'});
        res.end('ERROR!!!');
      });
  }
};