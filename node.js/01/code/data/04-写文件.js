var fs = require('fs');

fs.writeFile('你好.txt','大家好，给大家介绍一下，我是Node.js',function(err){
    console.log('文件写入成功')
})