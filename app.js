const util = require('util')
let s;

const callback = (rejected,s) =>{
  if(rejected){
    console.error(rejected.message)
  }else{
    console.log(`true ${s} = 2`)
  }
}

function check (s,callback) {
  s = 2;
  if(s === 2){
   callback(null,s)
  }else{
    callback(new Error(`${s} !== 2`))
  }
}


const checkPromis = util.promisify(check)

checkPromis(s).then((message) => {
  console.log(`baba galli : ${message}`);
}).catch((message) => {
  console.log(`baba galli : ${message}`);
})