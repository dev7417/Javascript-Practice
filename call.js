
const dev = {
    name: "Dev",
    sirName: "Gangwar",
    feature: function(){
        console.log(`hello ${this.name}`);
    }
}
// dev.feature();

const dev3 = {
    name: "honey",
    sirname: "gdwggf",
}

dev.feature.call(dev3);

const nam1 = {
    name: "Hello",
    sirName: "Golu",
    play: function(){
        console.log(`Hello ${this.sirName}`);
    }
}

const nam2 = {
    name: "Pello",
    sirName: "chello"
}
nam1.play.call(nam2);