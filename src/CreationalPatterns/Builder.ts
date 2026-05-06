// ################# Builder Pattern #####################
// the Builder pattern lets you create complexe objects on a step by step basis 
// it allows you to create differente types and representations of an objectr using the same construction process 


interface buildCarActions {
    setBrand(brand: string): CarBuilder
    setModel(model: string): CarBuilder
    setColor(color: string): CarBuilder
    setNbrDoors(nbrDoors: number): CarBuilder
}


class Car {
    constructor(
                private brand: string, 
                private model: string, 
                private color: string,
                private nbrDoors: number
        ) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.nbrDoors = nbrDoors;
    }
}


class CarBuilder implements buildCarActions {
    private brand: string = ''
    private model: string = ''
    private color: string = ''
    private nbrDoors: number = 0

    constructor () {}

    // building methods
    setBrand(brand: string): CarBuilder {
        this.brand = brand
        return this
    }
    setModel(model: string): CarBuilder {
        this.model = model
        return this
    }
    setColor(color: string): CarBuilder {
        this.color = color
        return this
    }
    setNbrDoors(nbrDoors: number): CarBuilder {
        this.nbrDoors = nbrDoors
        return this
    }

    // to be called at the end
    build(): Car {
        return new Car(this.brand, this.model, this.color, this.nbrDoors)
    }

}

// usage
const myCar: Car = new CarBuilder()
                    .setBrand('audi')
                    .setModel("Q8")
                    .setColor('black')
                    .setNbrDoors(4)
                    .build()
                    