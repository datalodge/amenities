const fs = require('fs');
const faker = require('faker');
const uuidv4 = require('uuid/v4');
const ws = fs.createWriteStream('amenitiesCAS.csv');
const wstream = fs.createWriteStream('homesCAS.csv');

//generate 35million Amenities. each home will have between 2 and 5 amenities. So (2+5)/2 =
// 3.5 amenities per home on average * 10 million homes = 35 million amenities.
let string = "";
ws.write('amenity_id,uuid,name,appeal,category,common,description,img_url\n');
for(let i=1; i<= 35000000; i++) { 
    let uuid = uuidv4();
    let name = faker.commerce.product();
    let appeal = Math.floor(Math.random() * 10);
    let category = faker.commerce.department();
    let common = Math.round(Math.random());
    let description = faker.lorem.sentence();
    let img_url = faker.image.image();
    string += `${i},${uuid},${name},${appeal},${category},${common},${description},${img_url}\n` ;
  
  if (i % 100000 === 0){
    console.log('we are now approaching', i);
    ws.write(string)
    string = '';
  }
}
ws.end();

//generate Homes
let str = "";
wstream.write('homeId,uuid,created_at\n');
for (let i=1; i<= 10000000; i++) {
  let uuid = uuidv4();
  let date = faker.date.past().toDateString();
  str += `${i},${uuid},${date}\n` ;

  if (i % 100000 === 0){
    console.log('building home records at', i);
    wstream.write(str)
    str = '';
  }  
}
wstream.end();
