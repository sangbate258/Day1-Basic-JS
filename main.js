// const name = "Dương Bá Sang";
// let age = 21;
// // //nối chuỗi
// console.log("Hello " + name + " I'm " + age);
// // //lồng biến vào chuỗi
// let hello = `Hello ${name}, I'm ${age}`
// console.log(hello);
// số kí tự trong chuỗi
// console.log(hello.length);
// // //viết hoa chuỗi
// console.log(hello.toUpperCase());
// // //Viết thường chuỗi
// console.log(hello.toLowerCase())
// //lấy chuỗi con từ 1 chuỗi và viết hoa chuỗi con đó
// console.log(hello.substring(0,5).toUpperCase());
// //tách chuỗi thành 1 hàm chứa từng chữ cái
// console.log(hello.split(''));
// //tách chuỗi mỗi khi gặp dấu ,
// let hello3 = `Xin, chào, ${name}, ${age}`;
// console.log(hello3.split(", "));
// //tạo mảng
// const arr = [1,'hai', true, 4.5];
// console.log(arr);
// //truy cập vào 1 phần tử trong mảng
// console.log(arr[1]);
// //thêm vào cuối mảng
// arr.push(4.5);
// console.log(arr);
// //Thêm vào đầu mảng
// arr.unshift('ba');
// console.log(arr);
// //Xóa giá trị cuối khỏi mảng
// arr.pop();
// console.log(arr);
// //kiểm tra xem một biến có phải là mảng ko
// console.log(Array.isArray(arr));
// //biết chỉ mục của một giá trị trong mảng
// console.log(arr.indexOf(true));
// // Tạo 1 object
// const person = {
//     firstName: 'Sang',
//     lastName: 'Dương Bá',
//     age: 21,
//     "sở thích": ['1', 2, true],
//     "địa chỉ": {
//         "số nhà": 180,
//         "số đường": "cao lỗ",
//         city: 'HCM'
//     }
// }
//in ra một giá trị của một thuộc tính trong obj
// console.log(person.firstName, person["sở thích"][2], person["địa chỉ"].city);
// //Tạo 1 biến trùng tên với thuộc tính obj rồi gán cho nó giá trị của thuộc tính obj đó
// const {firstName, 'sở thích': [, , boolean],'địa chỉ': { 'số đường': street}} = person;
// console.log(firstName,boolean,street);

// //thêm một thuộc tính mới 
// person.mail = 'sang@gmail.com';
// console.log(person);

// // //Tạo 1 mảng các đối tượng
// const arrayObj = [
//     {
//       id: 1,
//       text: "Take out trash",
//       isCompleted: true  
//     },
//     {
//       id: 2,
//       text: "meeting with boss",
//       isCompleted: true  
//     },
//     {
//       id: 3,
//       text: "Dentist appt",
//       isCompleted: false  
//     }
// ]
// console.log(arrayObj[1].text);
// // Chuyển đổi mảng thành file JSON
// const JSONconvert = JSON.stringify(arrayObj);
// console.log(JSONconvert);   
// //Vòng lặp for 
// for(let i = 0; i < arrayObj.length;i++)
// {
//     console.log(arrayObj[i].id);
// }
// // Vòng lặp while 0-10

// let i = 0;
// while(i < arrayObj[i].length)
// {
//     console.log(arrayObj[i].id);
//     i++;
// }
// Vòng lặp for of 
// for( let i of arrayObj)
// {
//     console.log(i.text);
// }
// //forEach: lặp qua ko trả về
// let sum = 0;
// arrayObj.forEach(function(a){
//     sum+=a.id;
// });
// //map: lặp qua và trả về mảng mới
// arrayNew = arrayObj.map(function(b){
//     return b.text;
// })
// console.log(arrayNew);
// //filter: lặp qua và lọc ra theo true hoặc false
// arrayNew1 = arrayObj.filter(function(a){
//     return a.isCompleted === true;
// }).map(function(a){
//     return a.text;
// })
// console.log(arrayNew1);
// //switch case
// const answer = 'h';
// switch(answer)
// {
//     case '10 lon hon':
//         console.log(answer);
//         break;
//     case '10 nho hon':
//         console.log(answer);
//         break;
//     default:
//         console.log('ko co');
//         break;
// }
// //function 
// const sum = function (numb1=1,numb2=2){
//     return numb1+numb2;
// }
// //arrow function
// const arrowFunction = (num1 = 1, num2 =2) => {num1+num2};
// console.log(arrowFunction(5,5));
// const addFive = num1 => num1;
// console.log(addFive(5));
////Hàm khởi tạo
//cho date vào obj
//Thêm phương thức của hàm
// function Person (firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }
// Person.prototype.getFullYear = function () {
//     return this.dob.getFullYear();
// }
// const person1 = new Person('sang','Dương','1-1-2024');
// console.log(person1.getFullYear());
// //class thay thế cho hàm khởi tạo
// class Person{
//     constructor(firstName, lastName, dob)
//     {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob= new Date(dob);
//     }
//     getFullYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return `${this.lastName} ${this.firstName}`;
//     }
// }
// const person1 = new Person('sang','Dương Bá','1-1-2024');
// console.log(person1);
// console.log(person1.getFullName());
// //DOM
// //single
// console.log(document.querySelector('h1'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('#my-form'));
// //multi
// console.log(document.querySelectorAll('.item'));
// //Thao tác
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));
// //
// const ul = document.querySelector('.items');
// // ul.remove();
// ul.lastElementChild.remove();
// //
// ul.firstElementChild.innerHTML = '<h1>hello</h1>';
// ul.children[1].textContent = 'Brad';
// ul.lastElementChild.innerText = 'hehe';
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// const h1 = document.querySelector('h1');
// h1.style.color = 'blue';
//Xử lý sự kiện
const btn = document.querySelector('.btn');
// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = "<h1>Bơi hết vào đây anh chấp hết</h1>";
//     document.querySelector('.items').lastElementChild.style.color='black';
// });
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value ==='' || emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = '<strong>Vui lòng điền đủ thông tin</strong>';
        setTimeout(() => msg.remove(),3000);
    }
    else{
        li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);
    }
    nameInput.value = '';
    emailInput.value = '';
}
