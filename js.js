let users = [
    { id: 11, name: 'Adam', age: 28, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
  
//   let groupByAge = users.reduce((acc, it) =>
//   ({...acc,[it.age]:(acc[it.age]  || 0)+1
    
//   }),{});
let updatedUsers = users.map(
    p => p.name !== "Adam" ? p : {...p, age: p.age + 1}
  );
  console.log(updatedUsers);

  let arrA = [1, 4, 3, 2];
let arrB = [5, 2, 6, 7, 1];

let arr = arrA.filter(it => arrB.includes(it));
console.log(arr);