const fs = require('fs');
const faker = require('faker');
const uuidv4 = require('uuid/v4');
const ws = fs.createWriteStream('amenitiestest.csv');

//Generate 35million Amenities. Each home will have between 2 and 5 amenities. So (2+5)/2 =
// 3.5 amenities per home on average * 10 million homes = 35 million amenities.
let string = '';
ws.write('home_id,uuid,name,appeal,category,common,description,img_url\n');

for(let i=1; i<= 100; i++) {   
  let numAmenities = Math.floor(Math.random() * 5) + 2;

  for (let j = 1; j <= numAmenities; j++) {
  let home_id = i;
  let uuid = uuidv4();
  let name = faker.commerce.product();
  let appeal = Math.floor(Math.random() * 10);
  let category = faker.commerce.department();
  let common = Math.round(Math.random());
  let description = faker.lorem.sentence();
  let img_url = faker.image.image();
  string += `${home_id},${uuid},${name},${appeal},${category},${common},${description},${img_url}\n` ;
  }  
  
  if (i % 10 === 0){
    console.log(i);
    ws.write(string)
    string = '';
  }
}
ws.end();

