const path = require('path');
const filePath = "C:\Users\Admin\OneDrive\Desktop\full stack\demo.js";
const filename = path.basename(filePath);
console.log(filename); 
const filenameWithoutExt = path.basename(filePath, '.js');
console.log(filenameWithoutExt);