const csv = require("fast-csv");
const fs = require('fs');

var stream = fs.createReadStream("amenities.csv");
 
var csvStream = csv()
    .on("data", function(data){
         console.log(data);
    })
    .on("end", function(){
         console.log("done");
    });
 
stream.pipe(csvStream);