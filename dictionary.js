console.log("this is all about dictionary api")

let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.dictionaryapi.dev/api/v2/entries/en/hello', true);

xhr.onprogress = function(){
    console.log("your response is ready")
}

xhr.onload = function(){
    console.log(this.responseText);
}
xhr.send();