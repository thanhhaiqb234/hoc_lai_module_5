


// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu (map).

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let newArr = arr.filter((item) => item > 5);
console.log(newArr);

// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((item, number) => item + number)
console.log(sum);

// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy" (some).

let arr = ['a', 'b', 'c', 'd', 'e'];
let result = arr.filter((item) => {
    if (item === 'v') {
        return item;
    }
})
if (result != 0) {
    console.log(result);
} else {
    console.log(result = "không tìm thấy")
}

// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không? (every).

let arr = [1, 2, 3, 4, 5, 6, 7, 9];
let message = arr.filter((item) => {
    if (item < 0) {
        return item = "No";
    }
})
if (message < 0) {
    console.log(message = "No")
} else {
    console.log(message = "Oki")
}

// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.

let arr = [1, 1, 1, 1, 1, 1, 5];
let number = arr.filter((item) => {
    if (item > 3) {
        return item;
    }
})
if (number.length > 0) {
    console.log(number[0])
} else {
    console.log(number + "Các phần tử trong mảng đều bé hơn 3")
}

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

let arr = ['Javascript', 'Ruby', 'PHP', 'C++', 'CSS', 'Java', 'Python'];
let [first, ...rest] = arr;
console.log(first, rest);

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

let person = {
    name: 'Hải',
    address: 'Quảng Bình',
    age: 25,
    clas: 'C0623G1'
}
let {name, age} = person;
console.log(name);
console.log(age);

// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

function sum(...arr) {
    let sum = arr.reduce((item, number) => item + number)
    console.log(sum);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

function languageName(...language) {
    let languageName = "Welcome," + language;
    console.log(languageName);
}
languageName('Java', 'C++', 'CSS', 'JavaScript', 'Python', 'Ruby', 'PHP');

// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng
// "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

let bookTitle = 'Marvel';
let bookAuthor = 'Stan Lee';
let bookPages = 1000;
let displayInfo = {
    bookTitle,
    bookAuthor,
    bookPages
}
console.log(displayInfo);
