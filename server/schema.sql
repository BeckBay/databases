CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  id int PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(9),
  message VARCHAR(20)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE friends (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  friendName varchar(50)
)



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


