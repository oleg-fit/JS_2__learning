// =======================  Домашнее задание  ===========================


// Task 1.
// Напишите функцию t1, которая при нажатии кнопки выводит в out-1 переменную a1.
// let a1 = 8;
// function t1() {
// }
// document.querySelector(‘.b-1’).onclick = t1;

const btn1 = document.querySelector('.btn1');
const out1 = document.querySelector('.out-1');

let a1 = 8;

function t1() {

    out1.innerHTML = a1;
}

document.querySelector('.btn1').onclick = t1;


// Task 2.
// Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок. Давайте сделаем так, чтобы функция, была более гибкой. Пусть теперь функция t2 возвращает переменную a2. Поскольку функция возвращает переменную, то имя функции со скобками (вызов функции) можно встраивать в выражения. Обратите внимание, как изменился вызов функции.
// let a2 = 8;
// function t2() {
// }
// document.querySelector(‘.b-2’).onclick =function() {
// document.querySelector(‘.out-2’).textContent = t2();
// }

let a2 = 8;

function t2() {

    return a2;
}

document.querySelector('.btn2').onclick =function() {

    document.querySelector('.out-2').textContent = t2();
}


// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. Пусть функция t3 принимает 2 параметра и выводит их произведение. Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве параметра a, b. Протестируем функцию на двух примерах, с помощью кнопок b3-1 и b3-2.
// function t3(a,b) {
// }
// document.querySelector(‘.b-3-1’).onclick =function() {
// document.querySelector(‘.out-3-1’).textContent = t3(3,4);
// }
// document.querySelector(‘.b-3-2’).onclick = function(){
// document.querySelector(‘.out-3-2’).textContent = t3(5,6);
// }

function t3(a,b) {

    return a * b;
}

document.querySelector('.btn3-1').onclick =function() {

    document.querySelector('.out-3-1').textContent = t3(3,4);
}

document.querySelector('.btn3-2').onclick = function() {

    document.querySelector('.out-3-2').textContent = t3(5,6);
}


// Task 4.
// Напишите функцию t4 которая принимает ваш год рождения и вычисляет ваш возраст.

function t4(a) {
    return 2019 - a;
}

console.log( 'Домашнее задание Task 4.');
console.log( t4(1987) );


// Task 5.
// Напишите функцию t5, которая принимает ваше имя в качестве параметра и возвращает строку Hello name, где name - принятое в качестве параметра имя.

function t5(a) {
    return `Hello ${a}`;
}

console.log( 'Домашнее задание Task 5.');
console.log( t5('Oleg') );


// Task 6.
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра.

function t6(a, b) {

    let rand = a + Math.random() * (b + 1 - a);
    return Math.floor(rand);
}

console.log( 'Домашнее задание Task 6.');
console.log( t6(1, 15) );


// Task 7.
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z) (строка). Где x,y,z - случайные числа в диапазоне [0, 255].

function t7() {

    let x = Math.floor( 1 + Math.random() * (255) );
    let y = Math.floor( 1 + Math.random() * (255) );
    let z = Math.floor( 1 + Math.random() * (255) );
    
    return `rgb (${x}, ${y}, ${z})`;
}

console.log( 'Домашнее задание Task 7.');
console.log( t7() );


// Task 8.
// Напишите функцию t8, которая принимает строку в качестве параметра и возвращает результат с очищенными пробелами в начале и вконце строки. Т.е. принимает _hello_ (где знак _ символизирует пробел), а возвращает hello. Для удаления пробелов - используйте trim.

function t8(a) {
 
    return a.trim();
}

console.log( 'Домашнее задание Task 8.');
console.log( t8('     Helo  ') );


// Task 9.
// Напишите функцию t9, которая принимает число и возвращает true, если число четное, и false если не четное.

function t9(a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
} 

console.log( 'Домашнее задание Task 9.');
console.log( t9(3) );

// Task 10.
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них. В случае равенства - любое из чисел.

function t10(a, b) {
    if (a > b) {
        return a;
    }
    else if (b > a) {
        return b;
    }
    else {
        return a;
    }
} 

console.log( 'Домашнее задание Task 10.');
console.log( t10(3, 2) );



// =======================  Задачи на прокачку  ===========================



// Task 1.
// Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.

const btnTask1 = document.querySelector('.btn__task1');

function myName1() {
    
    console.log('Oleg');
}

btnTask1.onclick = myName1;


// Task 2.
// Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. Запустите функцию и передайте в качестве имени Sergey.

function name2(a) {

    console.log(a);
}

console.log( 'Задачи на прокачку Task 2.');
name2('Sergey');


// Task 3.
// Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль. Запустите выполнение функции. Убедитесь, что она работает. Теперь создайте кнопку и добавьте на нее событие onclick которое вызывает данную функцию с параметром.
// Если вы напишите, подобный синтаксис elem.onclick = myFunc(11), то увидите, что данная функция - выполняется сразу при загрузке страницы! Действительно, ведь мы поставили скобки. Как передать параметр и не запустить функцию сразу? Довольно хитро:
// elem.onclick = function(){
//     myFunc(22);
// }
// Т.е. использовать обертку из анонимной функции.

const btnTask3 = document.querySelector('.btn__task3');

function multi3(a) {

    console.log(a * 10);
}

btnTask3.onclick = function () {

    multi3(10);
}


// Task 4.
// Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.

const btnTask4 = document.querySelector('.btn__task4');

btnTask4.onclick = () => {
    
    btnTask4.style.backgroundColor = 'red';
}

// Task 5.
// Создайте функцию, которая возвращает ваше имя. Имя вводится с input

const inputTask5 = document.querySelector('.input__task5');
let nameTask5 = inputTask5.value;

function name5() {

    return nameTask5;
}

console.log( 'Задачи на прокачку Task 5.');
console.log( name5() );


// Task 6.
// Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.

function comparingTwoNumbers6(a, b) {

    if (a > b) {
        return a;
    }
    else if (b > a) {
        return b;
    }
    else {
        return a;
    }
}

console.log( 'Задачи на прокачку Task 6.');
console.log( comparingTwoNumbers6(9, 9) );


// Task 7.
// Создайте функцию, которая принимает год рождения и возвращает ваш возраст. Текущий год задавать как 2019.

let yearNow7 = 2019;

function considersYourAge (a) {

    return yearNow7 - a;
}

console.log( 'Задачи на прокачку Task 7.');
console.log( considersYourAge (1987) );


// Task 8.
// Создайте функцию, которая возвращает случайное число от 1 до 10. По случайным числам читаем все здесь и задаем вопросы в чате.

function createsRandomNumber(min, max) {

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log( 'Задачи на прокачку Task 8.');
console.log( createsRandomNumber(1, 10) );


// Task 9.
// Создайте функцию, которая возвращает случайное число в указанном диапазоне. Диапазон указывает пользователь с помощью двух переменных, которые передаются функции в качестве параметров.

let num1Task9 = 1;
let num2Task9 = 10;

function createsRandomNumber(min, max) {

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

console.log( 'Задачи на прокачку Task 9.');
console.log( createsRandomNumber(num1Task9, num2Task9) );


// Task 10.
// Создайте функцию, которая возвращает случайный цвет. Напомню - цвет это строка rgb(0..255, 0..255, 0..255) - которая содержит 3 числа от нуля до 255 включительно, разделенных запятыми. Т.е. вам нужно три раза создать случайное число от 0 до 255.

function createsRandomColor() {

    let a = Math.floor( 1 + Math.random() * (255) );
    let b = Math.floor( 1 + Math.random() * (255) );
    let c = Math.floor( 1 + Math.random() * (255) );
    
    return `rgb (${a}, ${b}, ${c})`;
}

console.log( 'Задачи на прокачку Task 10.');
console.log( createsRandomColor() );


// Task 11.
// Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает их между собой. В качестве первого параметра передайте f11().

function f11() {
    return 5;
}

function multi11(a, b) {
    return a * b;
}

console.log( 'Задачи на прокачку Task 11.');
console.log( multi11(f11(), 10) );


// Task 12.
// Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.

const inputTask12 = document.querySelector('.input__task12');

function toNum(a) {
    return +a.value;
}

console.log( 'Задачи на прокачку Task 12.');
console.log( toNum(inputTask12) );


// Task 13.
// Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после значения (trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.

const inputTask13 = document.querySelector('.input__task13');

function emptyInput(a) {

    b = a.value.trim();

    if (b != '') {
        return b;
    }
    else {
        return false;
    }
}

console.log( 'Задачи на прокачку Task 13.');
console.log( emptyInput(inputTask13) );


// Task 14.
// Создайте функцию, которая принимает параметр число и возвращает true если число четное и false если нечетное.

function itIsEven14(a) {

    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log( 'Задачи на прокачку Task 14.');
console.log( itIsEven14(4) );