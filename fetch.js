console.log("All About Fetch Api");

let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content")
myBtn.addEventListener("click", data);

// function data(){
//     console.log("started data function")
//     url = "promises.js"
//   fetch(url).then((response)=>{
//     console.log("inside first then")
//     return response.text();
//   }).then((data)=>{
//     console.log("inside second then")
//     console.log(data);

//   })
// }

function data(){
    let cont  = document.getElementById("content")
    url = "https://api.github.com/users";

    fetch(url).then((response)=>{
        // console.log(response.json())
         let respond = response.json();
         return respond;
       
        
            
        }).then((data)=>{
        console.log(data);
    })
}
// console.log("Before running data")
data();

// function postData(){
//     url = "https://dummy.restapiexample.com/api/v1/create";
//     matter = '	{"name":"Dev","salary":"123","age":"23"}'
//     params = {
//         method: 'Post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: matter
//     }
//     fetch(url,params).then((response)=>{
//         return response.json()
//     }).then((matter)=>{
//         console.log(matter)
//     })
// }
// postData();
// console.log("After running data")
