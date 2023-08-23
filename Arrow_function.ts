// Arrow function không có tham số
const greet = () => {
    console.log("Xin chào!");
  };
  
  greet(); // Kết quả: Xin chào!
  
  // Arrow function với tham số
  const add = (a: number, b: number): number => a + b;
  ;
  
  console.log(add(2, 3)); // Kết quả: 5
  
  // Arrow function với lệnh return ngắn gọn
  const multiply = (a: number, b: number): number => a * b;
  
  console.log(multiply(4, 5)); // Kết quả: 20