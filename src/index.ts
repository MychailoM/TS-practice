// // interface User{
// //     id: number;
// //     name: string;
// //     isAdmin: boolean;
// // }

// // function getUser(user:User):any {
// //     if(user.isAdmin){
// //         return `Welcome admin, ${user.name}`
// //     }

// //     if(!user.isAdmin){
// //         return `Hello, ${user.name}`
// //     }
// // }

// // const user1: User = {
// //     id: 1,
// //     name: 'ring',
// //     isAdmin: true,
// // }

// // console.log(getUser(user1))

// // interface Product{
// // title: string;
// // price: number;
// // }

// // function getProduct(products:Product[]):number{
// //     return products.reduce((acc, val) => acc + val.price, 0);
// // }

// // type User = {
// //   name: string;
// //   age: number;
// // };

// // let users: User[] = [
// //   { name: "Anna", age: 17 },
// //   { name: "Ivan", age: 20 },
// //   { name: "Oleh", age: 25 },
// // ];

// // function check (users:User[]):string[]{
// //     return users.filter(user => user.age >= 18).map(user => user.name)
// // }

// // console.log(check(users));

// // interface Product{
// //     title: string;
// //     price: number;
// //     discount: number;
// // }

// // function discount(product:Product):number{
// //     return product.price-(product.price * product.discount)/100
// // }

// // let product:Product = {
// //     title: 'apple',
// //     price: 300,
// //     discount: 10,
// // }

// // console.log(discount(product))

// // class BankAccount{
// //     private balance: number = 0;
// //     deposite(amount:number):void{
// //         this.balance += amount;
// //     }
// //     withdraw(amount:number):void{
// //         if(amount>this.balance){
// //             console.log('не достатньо коштів');
// //             return
// //         }else{this.balance -= amount;}
// //     }
// //     getBalance():number{
// //         return this.balance
// //     }
// // }

// // const acount = new BankAccount();
// // acount.deposite(1000);
// // acount.withdraw(110);

// // console.log(acount.getBalance())

// // interface Products {
// //   name: string;
// //   price: number;
// // }

// // const products: Products[] = [
// //   { name: "Book", price: 200 },
// //   { name: "Phone", price: 1500 },
// //   { name: "Mouse", price: 700 },
// // ];

// // function filter(products:Products[]):Products[]{
// //     return products.filter(product => product.price > 500)
// // }

// // console.log(filter(products))

// // -приватні поля: username та password
// // - метод checkPassword(input)
// // - метод changePassword(oldPass, newPass)


// //HW

// let oldPass = (document.querySelector('.oldPass') as HTMLInputElement);
// let input = (document.querySelector('.pass') as HTMLInputElement);
// let change = (document.querySelector('.change') as HTMLButtonElement);
// let check = (document.querySelector('.check') as HTMLButtonElement);

// class UserAccount{
//   private username: string = "Bob";
//   private password: number = 12345678;
//   checkPassword(input: number){
//     if(input === this.password){
//       return "password is correct"
//     } return "password is incorrect"
//   }
//   changePassword(oldPass: number, newPass: number){
//   if (oldPass === this.password) {
//     this.password = newPass;
//     return `Новий пароль: ${newPass}`;
//   }

//   return "Старий пароль невірний";
// }
// }

// const user = new UserAccount();

// check.addEventListener('click', () => {
//   console.log(user.checkPassword(Number(input.value)))
// })

// change.addEventListener('click', () => {
//   console.log(user.changePassword(Number(oldPass.value), Number(input.value)))
// })



// const input = document.getElementById('taskInp') as HTMLInputElement;
// const btn = document.getElementById('addBtn') as HTMLButtonElement;
// const list = document.getElementById('taskList') as HTMLUListElement;

// btn.addEventListener('click', () => {
//   const text = input.value.trim();
//   if(!text)return
//   const li = document.createElement('li');
//   const span = document.createElement('span');
//   span.textContent = text;
//   const remove = document.createElement('button');
//   remove.textContent = 'X';
//   span.addEventListener('click', () => {
//     span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
//   });
//   remove.addEventListener('click', () => {
//     li.remove();
//   })
//   li.appendChild(span);
//   li.appendChild(remove);
//   list.appendChild(li);
//   input.value = '';
// })

// function firstEl<T>(arr: T[]): T{
//   return arr[0];
// }

// type User = {
//   name: string;
//   age: number;
//   hobbie: string[];
// }

// type UserKeys = keyof User;

// function getUserInfo(user: User, key: UserKeys) {
//   return user[key];
// }

// const user1: User = {
//   name: 'Bob',
//   age: 17,
//   hobbie: ['read', 'run'],
// };

// console.log(getUserInfo(user1, 'age'));


function lastItem<T>(arr: T[]): T|undefined{
  return arr[arr.length-1]
}
const arr: number[]=[1, 2, 3, 4, 5];
console.log(lastItem(arr));



const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
function merge<T, U>(arr1: T[], arr2: U[]): (T|U)[]{
  return [...arr1, ...arr2];  
}

console.log(merge(arr1, arr2));

