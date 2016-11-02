
Crypto=require ("cryptojs").Crypto;
//function myFunction() {


var encr=(Crypto.AES.encrypt("barEdge3etH", "762668bos")); 
console.log (encr);

//encr = "U2FsdGVkX19uldeyYSIFUmn9GUIbHyBO/IX4xbPJ3+Q=";

var predecr = (Crypto.AES.decrypt(encr, "762668bos"));
console.log(predecr);

//alert((encr.key) + "\n " + encr.iv);
//alert("Key: " + (encr.key) + "\n IV:" + encr.iv);

/*
var predecr1 = (Crypto.AES.decrypt(encr, encr.key, {iv : encr.iv}));

var decr = predecr1.toString(CryptoJS.enc.Utf8);
    var encrypt = document.getElementById("ENCR");
    var predecrypt = document.getElementById("PREDECR");
    var decrypt = document.getElementById("DECR");
	
	encrypt.value = encr;
	predecrypt.value = predecr;
	decrypt.value = decr;



    var words  = Crypto.enc.Base64.parse(encrypt.value); //'U2FsdGVkX19uldeyYSIFUmn9GUIbHyBO/IX4xbPJ3+Q='); //SGVsbG8sIFdvcmxkIQ==
	
    var base64 = Crypto.enc.Base64.stringify(words);	
	alert((words) + "\n" + base64);
*/

	var hash = Crypto.SHA1("762668bos:teradyne.com");
	console.log(hash, typeof(hash));
	//console.log(Crypto.charenc.UTF8.stringToBytes (hash));

//	var hashbase64 = Crypto.util.bytesToBase64(Crypto.charenc.UTF8.stringToBytes(hash));
	var hashbase64 = new Buffer(hash, 'hex').toString('base64');
	//alert("Sha1: " + hash + "\nbase64: " + hashbase64);
	console.log(hashbase64);
//}
