class Person {
  constructor ( firstName, lastName, gender, age ) {
    this._firstName = firstName
    this._lastName = lastName
    this._gender = gender
    this._age = age
  }


  get firstName () {
    return this._firstName;
  }

  set firstName ( newFirstName ) {
    if ( typeof newFirstName === 'string' ) {
      this._firstName = newFirstName;
    }
  }

  get lastName () {
    return this._lastName;
  }

  set lastName ( newLastName ) {
    this._lastName = newLastName;
  }

  get gender () {
    return this._gender;
  }

  set gender ( newGender ) {
    this._gender = newGender;
  }

  get age () {
    return this._age;
  }

  set age ( newAge ) {
    this._age = newAge;
  }

  toString () {
    return `${ this.firstName } ${ this.lastName }, ${ this.age } years old.`
  }


}

class Student extends Person {
  constructor ( fName, lName, gender, age, year, fee, programs ) {
    super( fName, lName, gender, age );
    this._year = year
    this._fee = fee
    this._program = programs
  }

  get year () {
    return this._year;
  }

  set year ( newYear ) {
    if ( typeof newYear === 'number' ) {
      this._year = newYear;
    }
  }

  get fee () {
    return this._fee;
  }

  set fee ( newFee ) {
    if ( typeof newFee === 'number' ) {
      this._fee = newFee
    }
  }

  get program () {
    return this._program;
  }

  set program ( newProgram ) {
    if ( Array.isArray( newProgram ) ) {
      this._program = newProgram;
    }
  }

  passExam ( programName, grade ) {
    for(let i = 0; i< this.program.length; i++){
      const el = this.program[i]
      if(this.program[i].programName === programName){
        this.program[i].grade = grade
      }
    }
  }

  isAllPassed(){
    if(!this.program.some(prog => !prog.grade || prog.grade < 50)){
      this.year += 1
      console.log('is all passed')
    }else{
      console.log('He stays in the same year')
    }

  }


}


const aaa = [
  { programName: "math", grade: 70 },
  { programName: "english", grade: undefined },
];


let user1 = new Person( "Name", "Surname", "female", 23 );
console.log( user1.toString() ); // Name Surname, 23 years old.

let johnDoe = new Student( 'John', 'Doe', 'male', 33, 3, 20000, aaa )
console.log(johnDoe.program)
johnDoe.passExam( 'english', 50 )
johnDoe.isAllPassed()
