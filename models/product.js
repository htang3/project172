const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')
const getproductFile = (callback) => {
    const p = path.join(rootDir, "data", 'products.json');
    fs.readFile(p, (err, fileContent)=>{
        if (!err){
            callback(JSON.parse(fileContent));
        }
        else {
           return console.log(err);
        }
    })
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        const p = path.join(rootDir, "data", 'products.json');
       getproductFile(products =>{
           products.push(this);
           fs.writeFile(p,JSON.stringify(products), err=>{
               console.log(err);
           })
       });
       fs.readFile(p, (err,fileContent)=>{});
        
    }
    //calling the method on the class itself
    static fetchAll(callback){
      getproductFile(callback);
    }
}