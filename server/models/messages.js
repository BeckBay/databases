var db = require('../db');

module.exports = {
  getAll: function () {
  //  console.log(db)
    return new Promise((resolve, reject) =>{
      db.query( 'SELECT * FROM `messages`', (err, data)=> {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  },
  create: function (newMessage) {
    console.log('inside message create');
    return new Promise((resolve, reject) =>{
      db.query( `INSERT INTO messages (username, message, roomname) VALUES ('${newMessage.username}', '${newMessage.message}', '${newMessage.roomname}')`, (err, data)=> {
        if (err) {
          console.log('message create has', err);
          reject('Error');
        } else {
          console.log('message create works fine');
          resolve(data);
        }
      });
    });
  },
};

//'${newMessage.username}, ${newMessage.message}, ${newMessage.roomname}