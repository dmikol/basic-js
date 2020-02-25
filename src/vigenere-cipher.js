class VigenereCipheringMachine {
    encrypt(word, key) {

        if(!word || !key){
            throw new Error();
        }
        let subKey = [];
        if(word.search(/[a-z]/gi) == -1){
            
        }else{

            let z = 0;
            let lengthSubKey = (word.match(/[a-z]/gi)).length;

            for(let m = 0; m < lengthSubKey; m++){
                if(key[m-(key.length)*z]){
                            subKey.push((key[m-(key.length)*z]).toLowerCase()); 
                        }else{
                            z++;
                            subKey.push((key[m-(key.length)*z]).toLowerCase()); 
                        }
            } 

        }
             let arrCode =[];
             
             for(let n = 0; n < word.length; n++){
                 if(word[n].search(/[a-z]/gi) != -1){
                     arrCode.push(String.fromCharCode((((word[n].toLowerCase().charCodeAt()-97)+(subKey[0].charCodeAt()-97)) % 26)+97));
                     subKey.shift();
      
                 }else{
                    arrCode.push(word[n]);
                 }
             }
    
             return arrCode.join('').toUpperCase();
        
    }
    
        decrypt(word, key) {
            if(!word || !key){
                throw new Error();
            }
            let subKey = [];
            let z = 0;
            let lengthSubKey = (word.match(/[a-z]/gi)).length;
            
            for(let m = 0; m < lengthSubKey; m++){
                if(key[m-(key.length)*z]){
                            subKey.push((key[m-(key.length)*z]).toLowerCase()); 
                        }else{
                            z++;
                            subKey.push((key[m-(key.length)*z]).toLowerCase()); 
                        }
            } 
    
             let arrCode =[];
             
             for(let n = 0; n < word.length; n++){
                 if(word[n].search(/[a-z]/gi) != -1){
                     arrCode.push(String.fromCharCode((((word[n].toLowerCase().charCodeAt()-97)+26-(subKey[0].charCodeAt()-97)) % 26)+97));
                     subKey.shift();
                 }else{
                    arrCode.push(word[n]);
                 }
             }
             return arrCode.join('').toUpperCase();


        }

        
    
    
}

module.exports = VigenereCipheringMachine;
