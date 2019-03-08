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

const getAmenenities = function(homeId, cb) {
  pool.query(`SELECT * FROM amenities WHERE home_id = ${homeId}`, (err, res) => {
    if (err) {
      cb(err);
    }
    cb(null, res.rows);
  })
}

// home_id,name,appeal,category,common,description,img_url,amen_id,included

// const insertInfo = (home) => {
//   pool.query(`INSERT INTO amenities (home_id, name, appeal, category, common, description, img_url, amen_id, included)
//     VALUES (${home.home_id}, ${home.name}, ${home.appeal}, ${home.category}, ${home.common}, ${home.description},
//     ${home.img_url}, ${home.amen_id}, ${home.included})`, (err, data) => {
//       if (err) {
//         cb(err);
//       }
//       console.log('New home and amenity created', data);
//     });
// };
 

module.exports = {
  pool,
  getAmenenities,
  // insertInfo
}
