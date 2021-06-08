
const {tablas}= require('./tablasModule/tablasMultiplicar');
const argv= require("./yargs/yargs");
console.clear();

tablas(argv.base,argv.h,argv.l)
.then(result=>console.log(result))
.catch(error=>console.log(error))