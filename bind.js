console.log("All About Bind in javascript");

const data = {
    name: "data1",
    sirName: "data2",
    feature: function(){
        console.log(`Hello the name is ${this.name}`);
    }
}

let datafun = data.feature;
datafun()

let datafun2 = data.feature.bind(data);
datafun2();