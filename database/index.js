const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

//GET get all
const getAmenenities = function(homeId, serverCallback) {
  let query = `SELECT * FROM amenities, amen_join_home WHERE amen_join_home.home_id= 
              ${homeId} &&amen_join_home.amen_id=amenities.id order by amenities.appeal desc`;
  let sqlCb = (err, dbData) => {
    if (err) {
      throw err;
    } else {
      serverCallback(null, dbData);
    }
  }
  connection.query(query, sqlCb);
}

//POST create amenity
const createAmenenity = function(homeId, serverCallback) {
  let query = `INSERT INTO amenities (name, appeal, category, common, description, img_url)
                VALUES (?, ?, ?, ?, ?, ?)`;
  let sqlCb = (err, dbData) => {
    if (err) {
      throw err;
    } else {
      serverCallback(null, dbData);
    }
  }
  connection.query(query, sqlCb);
}

//PUT update amenity
const updateAmenenity = function(homeId, serverCallback) {
  let query = `UPDATE SET amenities (name, appeal, category, common, description, img_url)
                VALUES (?, ?, ?, ?, ?, ?) WHERE ${homeId} = id`;
  let sqlCb = (err, dbData) => {
    if (err) {
      throw err;
    } else {
      serverCallback(null, dbData);
    }
  }
  connection.query(query, sqlCb);
}

//DELETE delete amenity
const deleteAmenenity = function(homeId, serverCallback) {
  let query = `DELETE FROM amenities WHERE id = ${homeId}`;
  let sqlCb = (err, dbData) => {
    if (err) {
      throw err;
    } else {
      serverCallback(null, dbData);
    }
  }
  connection.query(query, sqlCb);
}

module.exports = {
  getAmenenities,
  getAmenenity,
  createAmenenity,
  updateAmenenity,
  deleteAmenenity
};