// ################# Builder Pattern #####################
// the Builder pattern lets you create complexe objects on a step by step basis 
// it allows you to create differente types and representations of an objectr using the same construction process 


interface BuildCarActions {
    setBrand(brand: string): this
    setModel(model: string): this
    setColor(color: string): this
    setNumberOfDoors(numberOfDoors: number): this
}


class Car {
    constructor(
                private brand: string, 
                private model: string, 
                private color: string,
                private numberOfDoors: number
        ) {}
}


class CarBuilder implements BuildCarActions {
    private brand: string = ''
    private model: string = ''
    private color: string = ''
    private numberOfDoors: number = 0

    constructor () {}


    // building methods
    setBrand(brand: string): this {
        this.brand = brand
        return this
    }
    setModel(model: string): this {
        this.model = model
        return this
    }
    setColor(color: string): this {
        this.color = color
        return this
    }
    setNumberOfDoors(numberOfDoors: number): this {
        this.numberOfDoors = numberOfDoors
        return this
    }

    private reset(): void {
        this.brand = ''
        this.model = ''
        this.color = ''
        this.numberOfDoors = 0
    }

    // to be called at the end
    build(): Car {
        if (!this.brand.trim()) {
            throw new Error('Brand is required.')
        }
        if (!this.model.trim()) {
            throw new Error('Model is required.')
        }
        if (!this.color.trim()) {
            throw new Error('Color is required.')
        }
        if (!Number.isInteger(this.numberOfDoors) || this.numberOfDoors <= 0) {
            throw new Error('Number of doors must be a positive integer.')
        }

        const car = new Car(this.brand, this.model, this.color, this.numberOfDoors)
        this.reset()
        return car
    }

}

// usage
const builder: CarBuilder = new CarBuilder()
// use the same builder
const mySUVCar = builder
                .setBrand("audi")
                .setModel("Q8")
                .setColor("black")
                .setNumberOfDoors(4)
                .build()

const myCar = builder
                .setBrand("bmw")
                .setModel("i7")
                .setColor("white")
                .setNumberOfDoors(4)
                .build()

