const path = require('path');
//process.mainModule will refer to main(app.js)
module.exports = path.dirname(process.mainModule.filename);