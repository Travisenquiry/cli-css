let hexConverter = require("./hextorgb.js");
let rgbConverter = require("./rgbtohex.js");


if(process.argv[2] === "hex"){
  console.log("rgb( "+ hexConverter(process.argv[3]) + " ), " + hexConverter.hexToHSL(process.argv[3])); // "51";
}else if(process.argv[2] === "rgb"){
  console.log(rgbConverter(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])) + ", " +rgbConverter.rgbToHSL(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
}