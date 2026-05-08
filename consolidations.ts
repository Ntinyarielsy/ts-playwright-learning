/* This is a simple system that manages student records in a school.
    It uses enums and interfaces to organize student data such as grade level, 
    status, and GPA. A generic filter function and a School class allow students 
    to be added and filtered based on conditions like active status, grade, or academic performance.
*/

// ===== ENUMS =====
enum GradeLevel {
  Grade12 = "Grade12",
  Grade11 = "Grade11",
  Grade10 = "Grade10",
}

enum StudentStatus {
  Active = "Active",
  Inactive = "Inactive",
  Graduated = "Graduated",
}

// ===== INTERFACE =====
interface Student {
  id: number;
  name: string;
  grade: GradeLevel;
  status: StudentStatus;
  gpa: number;
}

// Generic function that filters any array using a condition
function filterItems<T>(items: T[],condition: (item: T) => boolean): T[] {
  return items.filter(condition);
}

// Create a class 
class School {
  constructor(
    private schoolName: string,
    private students: Student[] = []
  ) {}

  addStudent(student: Student): void {
    this.students.push(student);
  }

  getStudents(condition: (student: Student) => boolean): Student[] {
    return filterItems(this.students, condition);
  }
}

// ===== DATA =====
const mySchool = new School("Kenya High School");

mySchool.addStudent({
  id: 1,
  name: "Joan Mukami",
  grade: GradeLevel.Grade12,
  status: StudentStatus.Active,
  gpa: 3.8,
});

mySchool.addStudent({
  id: 2,
  name: "Sean Omondi",
  grade: GradeLevel.Grade10,
  status: StudentStatus.Active,
  gpa: 3.2,
});

mySchool.addStudent({
  id: 3,
  name: "Tabitha Mueni",
  grade: GradeLevel.Grade11,
  status: StudentStatus.Graduated,
  gpa: 3.9,
});

// ===== USAGE =====

// grade 12 students
const grade_12 = mySchool.getStudents((s) => s.grade === GradeLevel.Grade12);

// Active students
const activeStudents = mySchool.getStudents((s) => s.status === StudentStatus.Active);

// High achievers
const topStudents = mySchool.getStudents((s) => s.gpa >= 3.8);

console.log("Grade 12:", grade_12);
console.log("Active:", activeStudents);
console.log("Top Students:", topStudents);