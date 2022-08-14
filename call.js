let userDetails = {
    name: "Dev",
    sirName: "Gangwar",
    age: 22,
    Designation: "Front end Developer",
    feature: function(city){
        // console.log(`hello this is all about `, this);
        console.log(this.name+" "+city)
    }
}

// userDetails.feature();

let userDetails2 = {
    name: "Harry",
    sirName: "Das",
    age: 24,
    Designation: "Back end Developer",

}
userDetails.feature.call(userDetails2, "bareilly");