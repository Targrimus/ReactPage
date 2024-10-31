const fs = require('fs');
const path = require('path');

const createData = (filePath, times) => {
    let id = 6;
    let mArr = new Array(times);

    fs.readFile(path.join(__dirname,filePath),(err,data) => {
        for (let i = 0; i < times; i++) {
            let tempData = JSON.parse(data);

            if(tempData[0].id === i)
                continue;
            //console.log(i);
            mArr.push({...tempData[0], id:i, ekipmanTanimi: 'BR'+'0'.repeat(3-i.toString().length) + i})            
        }

        fs.writeFile(path.join(__dirname,filePath+'v.json'),JSON.stringify(mArr),(e,a) => {
            console.log(e,a);
        })
            //console.log(mArr);
    })    
}

console.log('program calistiriliyor...');
createData('./public/data.json',999);

