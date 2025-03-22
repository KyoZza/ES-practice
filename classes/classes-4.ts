abstract class Vehicle {
  protected brand: string

  constructor(brand: string) {
    this.brand = brand
  }

  abstract start(): void

  info() {
    console.log(`Vehicle brand: ${this.brand}`)
  }
}

class Car extends Vehicle {
  start(): void {
    console.log(`Car ${this.brand} starts with a key`)
  }
}

class ElectricCar extends Vehicle {
  start(): void {
    console.log(`Electric car ${this.brand} starts silently`)
  }
}

const toyota = new Car('Toyota')
toyota.start()
toyota.info()

const tesla = new ElectricCar('Tesla')
tesla.start()
tesla.info()

export {}
