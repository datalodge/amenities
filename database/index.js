const { Pool } = require('pg')

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'homes',
  password: ''
})

pool.connect((err) => {
  if (err) {
    console.error('connection error', err)
  } else {
    console.log('We are connected to your PostgreSQL database')
  }
})

//GET 
const getAmenenities = function(homeId, cb) {
  pool.query(`SELECT * FROM amenities WHERE home_id = ${homeId}`, (err, res) => {
    if (err) {
      cb(err);
    }
    cb(null, res.rows);
  })
}

const insertInfo = (home, callback) => {
  console.log(home, 'this is the home')
  let newHome = `INSERT INTO amenities (home_id, name, appeal, category, common, description, img_url, amen_id, included) 
      VALUES (${home.home_id}, '${home.name}', ${home.appeal}, '${home.category}', ${home.common}, '${home.description}',
      '${home.img_url}', ${home.amen_id}, ${home.included})`;
  pool.query(newHome, (err, data) => {
      if (err) {
        callback(err, null)
        return;
      }
      console.log('New home and amenity created');
      callback(null, data)
    });
};

module.exports = {
  pool,
  getAmenenities,
  insertInfo
}
