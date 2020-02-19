module.exports = function transform(arr) {
    let result = [];
  
    
    arr.forEach(function(item, index){
        if(item == '--discard-next' && (arr[index+1] !== undefined)){
            result.push('lol');
        }
        if(item == '--discard-prev' && result.length > 0){
            result.pop();
        }
        else if(item == '--double-next' && (arr[index+1] !== undefined)){
            result.push(arr[index+1]);
        }
        else if(item == '--double-prev' && (arr[index-1] !== undefined)){
            result.push(arr[index-1]);
        }else if(item != '--discard-next' && item != '--discard-prev' && item != '--double-next' && item != '--double-prev'){
            result.push(item);
        }

    });
    let res = [];
    let n = 0;
result.forEach(function(item, index){
  
if(item == "lol"){
        n = 2;  
}else if(n == 2){
        n = 0;
}else{
    res.push(item);
}
});
return res;
};
