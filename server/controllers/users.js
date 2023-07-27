var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll()
      .then((users) => {
        // res.writeHead (200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
      })
      .catch((err) => {
        res.writeHead (404, {'Content-Type': 'text'} );
        res.end('error');
      });
  },
  post: function (req, res) {
    let user = req.body;
    console.log('the user: ', user);
    models.users.create(user)
      .then(data =>{
        // res.writeHead(201, {'Content-Type': 'text' });
        res.end(JSON.stringify(data));
      })
      .catch(err =>{
        res.writeHead(404, {'Content-type': 'text'});
        res.end('error');
      });
  }
};