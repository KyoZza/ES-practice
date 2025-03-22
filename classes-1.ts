class Student {
  name: string
  id: number
  courses: Course[]

  constructor(name: string, id: number, courses: Course[] = []) {
    this.name = name
    this.id = id
    this.courses = courses
  }

  enroll(course: Course) {
    course.addStudent(this)
  }

  listCourses() {
    return this.courses.map(({ name }) => name)
  }
}

class Course {
  name: string
  code: string
  students: Student[]

  constructor(name: string, code: string, students: Student[] = []) {
    this.name = name
    this.code = code
    this.students = students
  }

  addStudent(student: Student) {
    this.students.push(student)
    student.courses.push(this)
  }

  listStudents() {
    return this.students.map(({ name }) => name)
  }
}

// Create courses
const math = new Course('Mathematics', 'MATH101')
const chemistry = new Course('Chemistry', 'CHEM201')

// Create students
const alice = new Student('Alice', 1)
const bob = new Student('Bob', 2)

// Enroll students in courses
alice.enroll(math)
bob.enroll(math)
alice.enroll(chemistry)
// math.addStudent(alice)
// math.addStudent(bob)
// chemistry.addStudent(alice)

console.log(alice.listCourses())
console.log(math.listStudents())
