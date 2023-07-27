var db = require('../db');

module.exports = {
  getAll: function () {
    return new Promise((resolve, reject) =>{
      db.query( 'SELECT * FROM `users`', (err, data)=> {
        if (err) {
          console.error('getAll in models.user: ', err);
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  create: function (newUser) {
    return new Promise((resolve, reject) =>{
      db.query(`INSERT INTO users (friendName) VALUES ('${newUser.username}')`, (err, data)=>{
        if (err) {
          reject(err);
        } else {
          console.log('there is no errors');
          resolve(data);
        }
      });
    });
  }
};
