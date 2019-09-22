// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.

let a = 7;
let b = 9;

console.log(a * b);


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.

let c = 7;
let d = 9;
let divTask2 = document.querySelector('.task2');

divTask2.innerHTML = c / d;


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.

let e = 3;
let f = 5;
let divTask3 = document.querySelector('.task3');

divTask3.innerHTML = e + f;


// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.

let e1 = '3';
let f1 = 5;
let divTask4 = document.querySelector('.task4');

divTask4.innerHTML = e1 + f1; //Так как e1 - строка, в данном случае произойдет конкатенация строк.


// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.

let e2 = 3;
let f2 = 0;
let divTask5 = document.querySelector('.task5');

divTask5.innerHTML = e2 / f2;


// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.

let e3 = 3;
let f3 = 'Hello';
let divTask6 = document.querySelector('.task6');

divTask6.innerHTML = e3 + f3;


// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.

let e4 = 3;
let f4 = 'Hello';
let divTask7 = document.querySelector('.task7');

divTask7.innerHTML = e4 * f4;


// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.

let input8 = document.querySelector('.task8__input');
let button8 = document.querySelector('.task8__btn');

button8.onclick = function() {
    let value = input8.value;
    console.log(value);
}


// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input.
// Добавьте очистку input после нажатия кнопки.

let input9 = document.querySelector('.task9__input');
let button9 = document.querySelector('.task9__btn');

button9.onclick = function() {
    let value9 = input9.value;
    console.log(value9);
    input9.value = '';
}


// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.

let input10 = document.querySelector('.task10__input');
let button10 = document.querySelector('.task10__btn');
let divTask10 = document.querySelector('.task10');


button10.onclick = function() {
    let value10 = +input10.value;
    divTask10.innerHTML = (value10 * 10);
    input10.value = '';
}


// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число,которое ввел пользователь и к нему добавленное число 10.

let input11 = document.querySelector('.task11__input');
let button11 = document.querySelector('.task11__btn');
let divTask11 = document.querySelector('.task11');


button11.onclick = function() {
    let value11 = +input11.value;
    divTask11.innerHTML = (value11 + 10);
    input11.value = '';
}


// Task 12.
// Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция,которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let inputName12 = document.querySelector('.task12__input_name');
let inputSurname12 = document.querySelector('.task12__input_surname');
let button12 = document.querySelector('.task12__btn');

button12.onclick = function() {
    let name12 = inputName12.value;
    let surname12 = inputSurname12.value;
    let sentence12 = `'Hello ${name12} ${surname12}'`;

    console.log(sentence12);
    inputName12.value = '';
    inputSurname12.value = '';
}


// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.

let inputFirstNumber13 = document.querySelector('.task13__input_firstnumber');
let inputSecondNumber13 = document.querySelector('.task13__input_secondnumber');
let button13 = document.querySelector('.task13__btn');
let divOut13 = document.querySelector('.out13')

button13.onclick = function() {
    let numberFirst13 = +inputFirstNumber13.value;
    let numberSecond13 = +inputSecondNumber13.value;
    let sum13 = numberFirst13 + numberSecond13;
    
    divOut13.innerHTML = sum13;
    inputFirstNumber13.value = '';
    inputSecondNumber13.value = '';
}

// Task 14.
// Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.

let input14 = document.querySelector('.task14__input_number');

input14.value = 'Hello';


// Task 15.
// Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.task15__input');

y.style.border = '2px solid red'


// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.

let inputFirstNumber16 = document.querySelector('.task16__input_firstnumber');
let inputSecondNumber16 = document.querySelector('.task16__input_secondnumber');
let button16 = document.querySelector('.task16__btn');
let divOut16 = document.querySelector('.out16');


button16.onclick = function() {
    let numberFirst16 = +inputFirstNumber16.value;
    let numberSecond16 = +inputSecondNumber16.value;
    let sum16 = numberFirst16 + numberSecond16;
    
    divOut16.innerHTML = sum16;
    inputFirstNumber16.value = '';
    inputSecondNumber16.value = '';
}


// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputFirstNumber17 = document.querySelector('.task17__input');
let button17 = document.querySelector('.task17__btn');

button17.onclick = function() {
    let t = inputFirstNumber17.value;
    t = parseInt(t);
    console.log(t);
    inputFirstNumber17.value = '';
}


// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

let inputFirstNumber18 = document.querySelector('.task18__input');
let button18 = document.querySelector('.task18__btn');

button18.onclick = function() {
    let t = inputFirstNumber18.value;
    t = parseFloat(t);
    console.log(t);
    inputFirstNumber18.value = '';
}


// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел.

let inputFirstNumber19 = document.querySelector('.task19__input_firstnumber');
let inputSecondNumber19 = document.querySelector('.task19__input_secondnumber');
let button19 = document.querySelector('.task19__btn');
let divOut19 = document.querySelector('.out19');

button19.onclick = function() {
    let numberFirst19 = +inputFirstNumber19.value;
    let numberSecond19 = +inputSecondNumber19.value;
    let sum19 = numberFirst19 + numberSecond19;
    
    divOut19.innerHTML = sum19;
    inputFirstNumber19.value = '';
    inputSecondNumber19.value = '';
}


// Task 20.
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по профессии вы ...' куда поставьте соответствующие данные из inputов.

let inputName20 = document.querySelector('.task20__input_name');
let inputSurname20 = document.querySelector('.task20__input_surname');
let inputAge20 = document.querySelector('.task20__input_age');
let inputProfession20 = document.querySelector('.task20__input_profession');
let button20 = document.querySelector('.task20__btn');
let divOut20 = document.querySelector('.out20');

button20.onclick = function() {
    let name20 = inputName20.value;
    let surname20 = inputSurname20.value;
    let age20 = +inputAge20.value;
    let profession20 = inputProfession20.value;
    let sentence20 = `'Уважаемый ${name20}, ${surname20}, ваш возраст ${age20} года, по профессии вы ${profession20}'`;

    divOut20.innerHTML = sentence20;
    inputName20.value = '';
    inputSurname20.value = '';
}























