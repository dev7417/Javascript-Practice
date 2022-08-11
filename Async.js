console.log("this is all about async and await")

async function fun(){
    let html = "";
console.log("inside the function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const users = await(response.json());

    users.forEach(element => {
        console.log(element)
        let cont = document.getElementById("container");
       let dummy = `
       <p>${element["login"]} </p> 
       `;

        cont.innerHTML += dummy;
    });
    console.log("users resloved")
    // return users;
//    return "dev";
}

console.log("Before Calling fun")
let a = fun();
console.log("After Calling fun")
console.log(a);
a.then((data)=>{
    console.log(data)
})
console.log("last line of this file")
