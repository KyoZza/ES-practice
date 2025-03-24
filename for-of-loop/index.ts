interface Student {
  name: string
  grade: number
}

function printGrades(students: Student[]) {
  for (const { name, grade } of students) {
    console.log(`${name} received a grade of ${grade}`)
  }
}

const students: Student[] = [
  { name: 'Alice', grade: 90 },
  { name: 'Bob', grade: 85 },
]

printGrades(students)
