module.exports = function createDreamTeam(members) {

if(Array.isArray(members)){
let result = members.map(function(item){
if(typeof(item) == 'string'){
return item[(item.search(/[a-z]/i))].toUpperCase();
}
});

return result.sort().join('');
}
return false;
}