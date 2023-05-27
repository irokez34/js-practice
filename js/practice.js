// const a = 10;
// const b = '10';

// console.log(a == b);





// Математичні операції 

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes;
// console.log(diff)


// Комбіновані оператори

// let students = 100;


// // students = students + 50;
// students /= 50;
// console.log(students);


// Пріоритет операторів

// const result = 10 + 20 - 2 * 5;
// console.log(result);

// Клас Math 
 
// const value = 27.5; 
// console.log(Math.floor(value)) //округлює до нижнього значення
// console.log(Math.ceil(value)) //округлює до верхнього значення
// console.log(Math.round(value)) //округлює за математичними законами

// Шаблонні рядки

// const companyName = 'Cyberdyne Systems';
// const repairBots = 1488;
// const defenceBots = 50;
// const message = companyName + ' has ' + (repairBots + defenceBots) + ' bots in stock'; // більш застарілий запис
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`; //шаблонні рядки
// console.log(message); //"Cyberdyne Systems(companyName) has 200(repairBots + defenceBots) bots in stock"


// Методи рядків та чейнінг

// let weight = '88,3';
// let height = '1.75';
// // console.log(typeof Number(weight)); 
// // console.log(Number(height))
// // console.log(Number.parseFloat(weight));
// const newWeight = Number(weight.replace(',' , '.'));
// const newHeight = Number(height.replace(',', '.'));




// console.log (newWeight);
// console.log (newHeight);

// const bmi = newWeight / Math.pow(newHeight , 2);
// console.log (bmi);
// console.log (bmi.toFixed(1));


// Оператори порівнняння та приведення типів

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined