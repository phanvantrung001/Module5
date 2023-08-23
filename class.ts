class Person {
    // Thuộc tính
    name: string;
    age: number;
  
    // Phương thức khởi tạo
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Phương thức
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Tạo một đối tượng từ lớp Person
  const person = new Person("John", 25);
  person.sayHello(); // Output: Hello, my name is John and I'm 25 years old.