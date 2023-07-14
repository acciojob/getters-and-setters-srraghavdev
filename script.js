class Person {
	constructor(name,age){
		this.name=name
		this.age=age
	}
	getter(){
		return this.name
	}
	setter(number){
		this.age=number
	}
}

class Student extends Person {
	constructor(name,age){
		super(name,age)
	}
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	constructor(name,age){
		super(name,age)
	}
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
