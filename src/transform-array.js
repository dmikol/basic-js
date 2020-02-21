module.exports = function transform(arr) {
    let result = [];
  
    arr.forEach(function(item, index){
        if(item == '--discard-next'){
            
        }
        else if(arr[index-1] !== undefined && arr[index-1] == '--discard-next'){

        }
        else if(item == '--discard-prev' && result.length > 0){
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
    
 return result;
}
