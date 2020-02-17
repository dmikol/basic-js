module.exports = function repeater(str, options) {
    
let arrStr = [];
let arrAdd = [];

if(Object.keys(options).length == 1){
    options['separator'] = '+';
}

for(let i = 0; i < options['additionRepeatTimes']; i++){
arrAdd.push(""+options['addition']+"");
}
for(let i = 0; i < options['repeatTimes']; i++){
arrStr.push(str+arrAdd.join(""+options['additionSeparator']+""));
}
if(arrStr.length == 0 && arrAdd.length == 0){
return str+options['addition'];  
}
return arrStr.join(""+options['separator']+"");

};
  