// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath)
// for(i=0; i<5;  i++){
//     fs.writeFileSync(`${dirPath}/Hello${i}.txt`, "This is a simple text")
// }

// fs.readdir(dirPath, (err, files)=>{
//     files.forEach((items)=>{
//         console.log('file name ',items)
//     })
// })

const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a simple text')

// fs.readFile(filePath, 'utf8', (err,item)=>{
//     console.log(item)
// })

fs.appendFile(filePath," " + "and file nasme is apple.txt",(err)=>{
    if(!err) console.log("file is updated")
})