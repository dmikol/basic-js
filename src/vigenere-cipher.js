class VigenereCipheringMachine {
    encrypt(word, key) {
        if(!word || !key){
            throw new Error();
        }
        let result;
        if(word.indexOf(':') != -1){
            result = word.slice(0, word.indexOf(':'));
        }else{
            result = word.match(/[A-Za-z ]/g).join('');
        }
        let index = result.length;
        let strLast = word.slice(index);
        let arrSpaces = [];

        for(let k = 0; k < result.length; k++){
            if(result[k] == ' '){
                arrSpaces.push(k);
            }
        }

        result = result.split(' ').join('').toLowerCase();
        let arrKey = [];
        let arrCode = [];

        let z = 0;
        for(let n = 0; n < result.length; n++){
            
            if(key[n-(key.length)*z]){
                arrKey.push(key[n-(key.length)*z]); 
            }else{
                z++;
                arrKey.push(key[n-(key.length)*z]); 
            }
        }
        let resultKey = arrKey.join('').toLowerCase();
        let x = 0;
        let m = 0;

        while(m < result.length){
            arrCode.push(String.fromCharCode((((result.charCodeAt(m)-97)+(resultKey.charCodeAt(m)-97)) % 26)+97));
                m++;
            if(m == arrSpaces[x]){
                arrCode.push(' ');
                x++;
                arrSpaces[x] -= 1;
            }
        }

        return arrCode.join('').toUpperCase()+strLast;
        
    }

    decrypt(word, key) {
        if(!word || !key){
            throw new Error();
        }

        let result;
        if(word.indexOf(':') != -1){
            result = word.slice(0, word.indexOf(':')-1);
        }else{
            result = word.match(/[A-Za-z ]/g).join('');
        }
        let index = result.length;
        let strLast = word.slice(index);
        let arrSpaces = [];

        for(let k = 0; k < result.length; k++){
            if(result[k] == ' '){
                arrSpaces.push(k);
            }
        }

        result = result.split(' ').join('').toLowerCase();
        let arrKey = [];
        let arrCode = [];

        let z = 0;
        for(let n = 0; n < result.length; n++){
            
            if(key[n-(key.length)*z]){
                arrKey.push(key[n-(key.length)*z]); 
            }else{
                z++;
                arrKey.push(key[n-(key.length)*z]); 
            }
        }
        let resultKey = arrKey.join('').toLowerCase();
        let x = 0;
        let m = 0;

        while(m < result.length){
            arrCode.push(String.fromCharCode((((result.charCodeAt(m)-97)+26-(resultKey.charCodeAt(m)-97)) % 26)+97));
                m++;
            if(m == arrSpaces[x]){
                arrCode.push(' ');
                x++;

                if(x == 1){
                    arrSpaces[x] -= 1;
                }else if(x == 2){
                    arrSpaces[x] -= 2; 
                }
                
            }
        }

        return arrCode.join('').toUpperCase()+strLast;


    }
    
}

module.exports = VigenereCipheringMachine;
