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

module.exports = {
  pool,
  getAmenenities
}
