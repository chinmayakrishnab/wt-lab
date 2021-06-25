class Car{
    constructor(name){
       this.name = name;
    }
    static meth(){
        console.log("Race car");
    }
    items(){
        console.log("Car items");
    }
}

class section extends Car{
    constructor(){
        super("ferrari");
    }
    items(i_name,quantity){
        this.i_name = i_name;
        this.quantity = quantity;
    }

}
class ferrari extends section{
    constructor(){
        this.section = "Ferrari F40";
    }
    typeOfCake(i_name,quantity){
        this.items(i_name,quantity);
        
    }
    
}

let ob = new Car("Ferrari");
console.log(ob);
Car.meth();

let ob1 = new section();
console.log (ob1.name);
ob1.items("Ferrari F40",5);
console.log(ob1.i_name+" "+ob1.quantity);



class Ca {
    constructor(name, type) {
        this.name = name;
        this.type = type;

    }
    About() {
        console.log("the car " + this.name + ' is' + this.type)
    }
    static Car() {
        console.log("static function");
    }
}


class vehicle extends Ca {
    constructor(name, type, model) {
        super(name, type)
        this.model = model;
    }
    About() {
        super.About();
        console.log("The vehicle" + this.name + ' is' + this.model)
    }
}

const car1 = new Ca("suzuki", "type1", "model1")
car1.About();

const car2 = new vehicle("benz", "typ2", "model2")
car2.About();