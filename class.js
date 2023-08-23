var Person = /** @class */ (function () {
    // Phương thức khởi tạo
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Phương thức
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    return Person;
}());
// Tạo một đối tượng từ lớp Person
var person = new Person("John", 25);
person.sayHello(); // Output: Hello, my name is John and I'm 25 years old.
