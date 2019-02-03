var forge = require('node-forge');


function () {
    console.log("........ ");

encryptData("1234",function(res){
    if (res != null) {
        console.log("E >>>>>>> ",res);
    }
});

decryptData("3I5KNoWMWXB29jdkmRTwHA==",function(res){
    if (res != null) {
        console.log("D >>>>>>> ",res);
    }
});

    console.log("fin.");
};


function encryptData(dataToCrypt, call){
         
let key = 'e51ef23d5e9c18789794d114f56e59c7';
let iv = 'AODVNUASDNVVAOVF';
let algo = 'AES-CBC';

let cipher = forge.cipher.createCipher(algo, key);
cipher.start({iv: iv});
cipher.update(forge.util.createBuffer(dataToCrypt));
cipher.finish();
let encrypted = cipher.output;

let resultat = forge.util.encode64(encrypted.data);

call(resultat);
      
}

function decryptData(dataToDecrypt, call){
         
let key = 'e51ef23d5e9c18789794d114f56e59c7';
let iv = 'AODVNUASDNVVAOVF';
let algo = 'AES-CBC';

let decodedB64 = forge.util.decode64(dataToDecrypt);
let decipher = forge.cipher.createDecipher(algo, key);
decipher.start({iv: iv});
decipher.update(forge.util.createBuffer(decodedB64));
decipher.finish(); 
let decrypt = decipher.output;

let result = decrypt.data;

call(result);
      
}