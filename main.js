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
const arr = [1,'hai', true, 4.5];
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
// Tạo 1 object
const person = {
    firstName: 'Sang',
    lastName: 'Dương Bá',
    age: 21,
    "sở thích": ['1', 2, true],
    "địa chỉ": {
        "số nhà": 180,
        "số đường": "cao lỗ",
        city: 'HCM'
    }
}
//in ra một giá trị của một thuộc tính trong obj
// console.log(person.firstName, person["sở thích"][2], person["địa chỉ"].city);
// //Tạo 1 biến trùng tên với thuộc tính obj rồi gán cho nó giá trị của thuộc tính obj đó
// const {firstName, 'sở thích': [, , boolean],'địa chỉ': { 'số đường': street}} = person;
// console.log(firstName,boolean,street);

// //thêm một thuộc tính mới 
// person.mail = 'sang@gmail.com';
// console.log(person);

// //Tạo 1 mảng các đối tượng
const arrayObj = [
    {
      id: 1,
      text: "Take out trash",
      isCompleted: true  
    },
    {
      id: 2,
      text: "meeting with boss",
      isCompleted: true  
    },
    {
      id: 3,
      text: "Dentist appt",
      isCompleted: false  
    }
]
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
//forEach: lặp qua ko trả về
let sum = 0;
arrayObj.forEach(function(a){
    sum+=a.id;
});
//map: lặp qua và trả về mảng mới
arrayNew = arrayObj.map(function(b){
    return b.text;
})
console.log(arrayNew);
//filter: lặp qua và lọc ra theo true hoặc false
arrayNew1 = arrayObj.filter(function(a){
    return a.isCompleted === true;
}).map(function(a){
    return a.text;
})
console.log(arrayNew1);
//