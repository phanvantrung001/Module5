class Container<T> {
    private data: T;
  
    constructor(initialData: T) {
      this.data = initialData;
    }
  
    getData(): T {
      return this.data;
    }
  
    setData(newData: T): void {
      this.data = newData;
    }
  }
  
  // Sử dụng lớp Container với kiểu dữ liệu là number
  const numberContainer = new Container<number>(42);
  console.log(numberContainer.getData()); // Output: 42
  
  numberContainer.setData(24);
  console.log(numberContainer.getData()); // Output: 24
  
  // Sử dụng lớp Container với kiểu dữ liệu là string
  const stringContainer = new Container<string>("Hello");
  console.log(stringContainer.getData()); // Output: Hello
  
  stringContainer.setData("World");
  console.log(stringContainer.getData()); // Output: World