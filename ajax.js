let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", data);

function data(){
    const xhr = new XMLHttpRequest();

    // xhr.open('Get', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POST','https://jsonplaceholder.typicode.com/posts',true);
    xhr.getResponseHeader('Content-type','application/json');

    xhr.onprogress = function(){
        console.log('on progress');
    }

    xhr.onload = function(){
        if(this.status === 200){
        console.log(this.responseText);
        }else{
            console.error("error");
        }
    }
    params = `[{
        "userId": 2,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }]`
    xhr.send(params);

    console.log("we are done")
}