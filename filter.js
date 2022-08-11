let ages = [24,25,36,88,44,15,52];

let filter = ages.filter(checkages);
document.getElementById("para").innerHTML = ages.filter(checkages)

function checkages(age){
    return age >= 18;
}