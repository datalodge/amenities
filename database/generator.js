const fs = require('fs');
const faker = require('faker');
const ws = fs.createWriteStream('amenities.csv');

//Generate 35million Amenities. Each home will have between 2 and 5 amenities. So (2+5)/2 =
// 3.5 amenities per home on average * 10 million homes = 35 million amenities.
let string = '';
let photos = [
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/1.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/2.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/3.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/4.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/5.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/6.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/7.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/8.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/9.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/10.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/11.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/12.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/13.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/14.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/15.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/16.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/17.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/18.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/19.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/20.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/21.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/22.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/23.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/24.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/25.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/26.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/27.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/28.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/29.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/30.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/31.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/32.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/33.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/34.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/35.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/36.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/37.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/38.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/39.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/40.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/41.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/42.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/43.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/44.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/45.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/46.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/47.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/48.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/49.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/50.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/51.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/52.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/53.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/54.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/55.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/56.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/57.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/58.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/59.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/60.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/61.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/62.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/63.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/64.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/65.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/66.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/67.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/68.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/69.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/70.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/71.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/72.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/90.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/91.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/92.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/93.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/94.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/95.jpeg',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/96.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/97.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/98.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/99.jpeg',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/100.jpeg',    
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/ac.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/bikerack.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/breakfast.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/coDetector.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/dryer.png',   
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/fireplace.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/frenchpress.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/jar.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/kitchen.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/parking.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/pets.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/tv.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/vhs.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/washer.png',
  'https://s3.amazonaws.com/amenities4datalodge/amenities2/wifi.png',                                                                         
];
ws.write('home_id,name,appeal,category,common,description,img_url,amen_id,included\n');

for(let i=1; i<= 10000000; i++) {   
  let numAmenities = Math.floor(Math.random() * 5) + 2;
  let arr = ['Basic', 'Facilities', 'Hip', 'None'];
  for (let j = 1; j <= numAmenities; j++) {
  let home_id = i;
  let name = faker.commerce.product();
  let appeal = Math.floor(Math.random() * 10);
  let category = arr[Math.floor(Math.random() * 3)];
  let common = Math.round(Math.random());
  let description = faker.lorem.sentence().slice(0, 15);
  let img_url = photos[Math.floor(Math.random() * 97)];
  let amen_id = Math.floor(Math.random() * 15) + 1; 
  let included = 1;
  string += `${home_id},${name},${appeal},${category},${common},${description},${img_url},${amen_id},${included}\n` ;
  }  
  
  if (i % 100000 === 0){
    console.log('we out here', i);
    ws.write(string)
    string = '';
  }
}
ws.end();

