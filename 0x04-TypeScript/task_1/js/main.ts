const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);
  
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);


interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
 console.log(printTeacher("John", "Doe")); 


interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  

  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }

  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }

  const student = new StudentClass({ firstName: 'Jane', lastName: 'Doe' });
  console.log(student.displayName());     
  console.log(student.workOnHomework());