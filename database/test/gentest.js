const fs = require('fs');
const faker = require('faker');
const ws = fs.createWriteStream('gen1.csv');
const wstream = fs.createWriteStream('gen2.csv');

//generate the amenities
let string = "";
ws.write('id, name, appeal, category, common, description, img_url \n');
for(let i=0; i<= 5; i++) {

  // let numAmenities = Math.floor(Math.random() * 5 ) + 1;
  
  // for (let j = 0; j < numAmenities; j++) {    
    let name = faker.commerce.product();
    let appeal = Math.floor(Math.random() * 10);
    let category = faker.commerce.department();
    let common = Math.round(Math.random());
    let description = faker.lorem.sentence();
    let img_url = faker.image.image();
    string += `${i}, ${name}, ${appeal}, ${category}, ${common}, ${description}, ${img_url} \n` ;
  
  if (i % 1 === 0){
    console.log('we are now approaching', i);
    ws.write(string)
    string = '';
  }
}
ws.end();

//generate the homes
let str = "";
wstream.write('id, created_at \n');
for (let i=0; i<= 10; i++) {
  let date = faker.date.past().toDateString();
  str += `${i}, ${date} \n` ;

  if (i % 2 === 0){
    wstream.write(str)
    str = '';
  }  
}

wstream.end();
