function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

if(process.argv[2] === "hex"){
  console.log("rgb( "+ hexToRgb(process.argv[3]) + " )"); // "51";
}else if(process.argv[2] === "rgb"){
  console.log(rgbToHex(parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5])));
}