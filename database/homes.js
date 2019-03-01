const fs = require('fs');
const wstream = fs.createWriteStream('homes.csv');

let string = "";
wstream.write('id, created_at \n');
for (let i=0; i<= 10000000; i++) {
  let rentedBefore = Boolean(Math.round(Math.random()));
  string += `${i}, ${rentedBefore} \n` ;

  if (i % 100000 === 0){
    wstream.write(string)
    string = '';
  }  
}

wstream.end();

