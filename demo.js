const fs =require('fs');
fs.writeFileSync('example.txt','this is an example file created using Node.js',
function(e){
    if(e) console.log("ye aaya error");
    console.log("done");
});
console.log('file created successfully');
console.log('File system operation completed');