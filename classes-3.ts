class Person {
  protected name: string
  protected age: number

  constructor(name: string, age: number) {
    this.age = age
    this.name = name
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}`
  }

  toString() {
    return this.getInfo()
  }
}

class Student extends Person {
  readonly studentId: string

  constructor(name: string, age: number, studentId: string) {
    super(name, age)
    this.studentId = studentId
  }

  getInfo() {
    return `${super.getInfo()}, Student ID: ${this.studentId}`
  }
}

class Teacher extends Person {
  readonly employeeId: string

  constructor(name: string, age: number, employeeId: string) {
    super(name, age)
    this.employeeId = employeeId
  }

  getInfo() {
    return `${super.getInfo()}, Employee ID: ${this.employeeId}`
  }
}

const alice = new Student('Alice', 20, 'S12345')
const smith = new Teacher('Mr. Smith', 45, 'E98765')

// console.log(alice.getInfo())
// console.log(smith.getInfo())
console.log(`${alice}`)
console.log(`${smith}`)

export {}
