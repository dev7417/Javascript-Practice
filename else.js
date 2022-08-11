const age = 28;
// const vari = 34
// const doesDrive = "true";

// if(doesDrive || age>18){
//     console.log("You can Drive");
// }else{
//     console.log("You Cannot Drive");
// }

// if(age == 19){
//     console.log("age is 19")
// }
// else if(age == 65){
//     console.log("Age is 65");
// }
// else{
//     console.log("age is not 19")
// }
// if(typeof vari !== 'undefined'){
//     console.log('vari is defined');
// }
// else{
//     console.log('vari is not defined');
// }
// console.log(age == 45? 'Age is 45':'Age is not 45')
switch (age) {
    case 18:
    console.log("You are 18")        
        break;
        case 28:
            console.log("You are 28");
            break;
            case 38:
                console.log("You are 38")
                break;
    default:
        console.log("you are unknown");
        break;
}