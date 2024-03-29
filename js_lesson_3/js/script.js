// Task 1.
// Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.

let a = 4;

if (a == 4) {
    console.log('Отлично!');
}


// Task 2.
// Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.

let b = 8;
let c = 10;

if (b > c) {
    console.log('Переменная "b" больше!');
}
else {
    console.log('Переменная "c" больше');
} 


// Task 3.
// Используя else if добавьте в предыдущую задачу проверку на равенство.

if (b > c) {
    console.log('Переменная "b" больше!');
}
else if (b == c) {
    console.log('Переменная "b" и переменная "c" равны');
}
else {
    console.log('Переменная "c" больше');
} 


// Task 4.
// Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".

const inputTask4Num1 = document.querySelector('.task4__input_num1');
const inputTask4Num2 = document.querySelector('.task4__input_num2');
const btnTask4 = document.querySelector('.task4__btn');
const out4 = document.querySelector('.out4');

cleanInput = function(a , b) {
    a.value = '';
    b.value  = '';
}

btnTask4.onclick = () => {
    let num1 = +inputTask4Num1.value;
    let num2 = +inputTask4Num2.value;

    if (num1 > num2) {
        out4.innerHTML = num1;
    }   
    else if (num1 == num2) {
        out4.innerHTML = 'Равны';
    }
    else {
        out4.innerHTML = num2;
    }

    cleanInput(inputTask4Num1, inputTask4Num2);
}


// Task 5.
// Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.

const inputTask5 = document.querySelector('.task5__input');
const btnTask5 = document.querySelector('.task5__btn');
const out5 = document.querySelector('.out5');

btnTask5.onclick = () => {
    let yearOfBirthUser5 = +inputTask5.value;
    let yearNow5 = 2019;
    let comparativeYear = 2000;
    let age5 = yearNow5 - yearOfBirthUser5;
    
    if (yearOfBirthUser5 < comparativeYear) {
        out5.innerHTML = age5;
    }
    else if (yearOfBirthUser5 >= comparativeYear) {
        console.log(age5);
    }

    cleanInput(inputTask5, 0);
}


// Task 6.
// Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.

// не понимаю тут нужно было кнопку делать?
const inputTask6 = document.querySelector('.task6__input');
const btnTask6 = document.querySelector('.task6__btn');
const out6 = document.querySelector('.out6');

btnTask6.onclick = () => {
    let apartmentNumber = +inputTask6.value;

    if(apartmentNumber >= 1 && apartmentNumber <= 32) {
        out6.innerHTML = 'Такая квартира есть!';
    }
    else {
        out6.innerHTML = 'Такая квартиры нет!';
    }

    cleanInput(inputTask6, 0);
}


// Task 7.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.

const inputTask7 = document.querySelector('.task7__input');
const btnTask7 = document.querySelector('.task7__btn');
const out7 = document.querySelector('.out7');

btnTask7.onclick = () => {
    let number7 = +inputTask7.value;

    if(number7 > 0) {
        // Надеюсь я правильно понял задание и нужно использовать alert
        alert('Значение боьше нуля');
    }
    else if (number7 < 0) {
        alert('Значение меньше нуля');
    }

    cleanInput(inputTask7, 0);
}


// Task 8.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.

const inputTask8 = document.querySelector('.task8__input');
const btnTask8 = document.querySelector('.task8__btn');
const out8 = document.querySelector('.out8');

btnTask8.onclick = () => {
    let number8 = +inputTask8.value;

    if(number8 % 2 == 0) {
        alert('Число четное');
    }
    else {
        alert('Число не четное');
    }

    cleanInput(inputTask8, 0);
}


// Task 9.
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу. Как возвести в степень? Читаем!

const inputTask9Num1 = document.querySelector('.task9__input_number1');
const inputTask9Num2 = document.querySelector('.task9__input_number2');
const btnTask9 = document.querySelector('.task9__btn');
const out9 = document.querySelector('.out9');

btnTask9.onclick = () => {
    let num1 = +inputTask9Num1.value;
    let num2 = +inputTask9Num2.value;

    if(num1 != '' && num2 != '') {
        out9.innerHTML = num1 ** num2;
    }

    cleanInput(inputTask9Num1, inputTask9Num2);
}


// Task 10.
// Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...

const inputTask10 = document.querySelector('.task10__input');
const btnTask10 = document.querySelector('.task10__btn');
const out10 = document.querySelector('.out10');

btnTask10.onclick = () => {
    let name10 =  inputTask10.value;

    if(name10 == '' || name10 == ' ') {
        alert('Введите корректно свое имя!!!')
    }
    else {
        alert(`Hello ${name10}`)
    }

    cleanInput(inputTask10, 0);
}


// Task 11.
// Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input.

const inputTask11 = document.querySelector('.task11__input');
const btnTask11 = document.querySelector('.task11__btn');
const out11 = document.querySelector('.out11');

btnTask11.onclick = () => {
    let name11 =  inputTask11.value;
    let nameWithoutSpaces11 = name11.trim();

    if(nameWithoutSpaces11 == '') {
        alert('Введите корректно свое имя!!!')
    }
    else {
        alert(`Hello ${nameWithoutSpaces11}`)
    }

    cleanInput(inputTask11, 0);
}


// Task 12.
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch.

const inputTask12 = document.querySelector('.task12__input');
const btnTask12 = document.querySelector('.task12__btn');

btnTask12.onclick = () => {
    let name12 =  +inputTask12.value;

    switch (name12) {
        case 1:
            console.log('Один');
            break;
        case 2:
            console.log('Два');
            break;
        case 3:
            console.log('Три');
            break;
    }
    
    cleanInput(inputTask12, 0);
}


// Task 13.
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.

// А тут случайно не ошибка в условии задачи : 
// если от 6 до 11!!!!! - улица 2, 
// если от !!!!11 до 20

const inputTask13 = document.querySelector('.task13__input');
const btnTask13 = document.querySelector('.task13__btn');
const out13 = document.querySelector('.out13');

btnTask13.onclick = () => {
    let housenumber13 = +inputTask13.value;


    if(housenumber13 >= 1 && housenumber13 <= 5) {
        out13.innerHTML = 'Улица 1'
    }
    else if(housenumber13 >= 6 && housenumber13 <= 10) {
        out13.innerHTML = 'Улица 2'
    }
    else if(housenumber13 >= 11 && housenumber13 <= 20) {
        out13.innerHTML = 'Улица 3'
    }

    cleanInput(inputTask13, 0);
}


// Task 14.
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Больше 600 - смертность 100%. Вывод результатов сделайте на страницу.

const inputTask14 = document.querySelector('.task14__input');
const btnTask14 = document.querySelector('.task14__btn');
const out14 = document.querySelector('.out14');

btnTask14.onclick = () => {
    let amountOfXRay = +inputTask14.value;

    if(amountOfXRay >= 0 && amountOfXRay <= 25) {
        out14.innerHTML = 'От 0 до 25 - не обнаруживается';
    }
    else if (amountOfXRay <= 50) {
        out14.innerHTML = 'До 50 - снижение числа лимфоцитов';
    }
    else if (amountOfXRay <= 100) {
        out14.innerHTML = 'До 100 - вялость, рвота';
    }
    else if (amountOfXRay <= 150) {
        out14.innerHTML = 'До 150 - смертность 5%';
    }
    else if (amountOfXRay <= 350) {
        out14.innerHTML = 'До 350 - смертность 50% за 30 суток';
    }
    else if (amountOfXRay <= 600) {
        out14.innerHTML = 'До 600 - 90% смертность за 2 недели';
    }
    else if (amountOfXRay > 600) {
        out14.innerHTML = 'Больше 600 - смертность 100%';
    }

    cleanInput(inputTask14, 0);
}


// Task 15.
// Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.

let x = 1;
let y = 0;

console.log(x && y); // Этот оператор возвращает первое false.
console.log(x || y); // Этот оператор возвращает первое true.

// Task 16.
// В Казахстане, налог на объем двигателя составляет:
//     от 0 до 499 кубов - 2525 тенге
//     от 500 до 1199 кубов - 5050 тенге
//     от 1200 до 1599 кубов - 8275 тенге
//     от 1600 до 1899 кубов - 9675 тенге
//     от 1900 до 1999 кубов - 11075тенге
//     от 2000 и выше кубов - 15000 тенге
// Напишите программу, где пользователь может ввести в input объем двигателя и получить налог на данный двигатель.

const inputTask16 = document.querySelector('.task16__input');
const btnTask16 = document.querySelector('.task16__btn');
const out16 = document.querySelector('.out16');

btnTask16.onclick = () => {
    let engineVolume = +inputTask16.value;

    if(engineVolume >= 0 && engineVolume <= 499) {
        out16.innerHTML = 'Налог на данный двигатель составит 2525 тенге';
    }
    else if (engineVolume >= 500 && engineVolume <= 1199) {
        out16.innerHTML = 'Налог на данный двигатель составит 5050 тенге';
    }
    else if (engineVolume >= 1200 && engineVolume <= 1599) {
        out16.innerHTML = 'Налог на данный двигатель составит 8275 тенге';
    }
    else if (engineVolume >= 1600 && engineVolume <= 1899) {
        out16.innerHTML = 'Налог на данный двигатель составит 9675 тенге';
    }
    else if (engineVolume >= 1900 && engineVolume <= 1999) {
        out16.innerHTML = 'Налог на данный двигатель составит 11075тенге';
    }
    else if (engineVolume > 2000) {
        out16.innerHTML = 'Налог на данный двигатель составит 15000 тенге';
    }

    cleanInput(inputTask16, 0);
}


// Task 17.
// Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.

const inputTaskDollars17 = document.querySelector('.task17__input_dollars');
const inputTaskСurrency17 = document.querySelector('.task17__input_сurrency');
const btnTask17 = document.querySelector('.task17__btn');
const out17 = document.querySelector('.out17');

btnTask17.onclick = () => {
    let dollars17 = +inputTaskDollars17.value;
    let currency17 = inputTaskСurrency17.value;
    let dollarToEurRatio17 = 0.92;
    let dollarToRubRatio17 = 64.67;
    let dollarToUahRatio17 = 24.1;

    if(currency17 == 'euro') {
        out17.innerHTML = `В евро ваша сумма составит: ${dollars17*dollarToEurRatio17}eur`;
    }
    else if(currency17 == 'rub') {
        out17.innerHTML = `В рублях ваша сумма составит: ${dollars17*dollarToRubRatio17}rub`;
    }
    else if(currency17 == 'uah') {
        out17.innerHTML = `В гривнах ваша сумма составит: ${dollars17*dollarToUahRatio17}uah`;
    }
}


// Task 18.
// Проделайте предыдущую задачу с помощью switch case.

const inputTaskDollars18 = document.querySelector('.task18__input_dollars');
const inputTaskСurrency18 = document.querySelector('.task18__input_сurrency');
const btnTask18 = document.querySelector('.task18__btn');
const out18 = document.querySelector('.out18');

btnTask18.onclick = () => {
    let dollars18 = +inputTaskDollars18.value;
    let currency18 = inputTaskСurrency18.value;
    let dollarToEurRatio18 = 0.92;
    let dollarToRubRatio18 = 64.67;
    let dollarToUahRatio18 = 24.1;

    switch (currency18) {
        case 'euro':
            out18.innerHTML = `В евро ваша сумма составит: ${dollars18*dollarToEurRatio18}eur`
            break;
        case 'rub':
            out18.innerHTML = `В рублях ваша сумма составит: ${dollars18*dollarToRubRatio18}rub`;
            break;
        case 'uah':
            out18.innerHTML = `В гривнах ваша сумма составит: ${dollars18*dollarToUahRatio18}uah`;
            break;
    }
}


// Task 19.
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.

const input19TaskNum1 = document.querySelector('.task19__input_num1');
const input19TaskNum2 = document.querySelector('.task19__input_num2');
const input19TaskSing = document.querySelector('.task19__input_sign');
const btnTask19 = document.querySelector('.task19__btn');
const out19 = document.querySelector('.out19');

btnTask19.onclick = () => {
    let num1 = +input19TaskNum1.value;
    let num2 = +input19TaskNum2.value;
    let sing = input19TaskSing.value;

    if(sing == '+') {
        out19.innerHTML = `${num1 + num2}`
    }
    else if (sing == '-') {
        out19.innerHTML = `${num1 - num2}`
    }
    else if (sing == '*') {
        out19.innerHTML = `${num1 * num2}`
    }
    else if (sing == '/') {
        out19.innerHTML = `${num1 / num2}`
    }
}


// Task 20.
// Проделайте предыдущую задачу с помощью switch case.

const input20TaskNum1 = document.querySelector('.task20__input_num1');
const input20TaskNum2 = document.querySelector('.task20__input_num2');
const input20TaskSing = document.querySelector('.task20__input_sign');
const btnTask20 = document.querySelector('.task20__btn');
const out20 = document.querySelector('.out20');

btnTask20.onclick = () => {
    let num1 = +input20TaskNum1.value;
    let num2 = +input20TaskNum2.value;
    let sing = input20TaskSing.value;

    switch (sing) {
        case '+':
            out20.innerHTML = `${num1 + num2}`
            break;
        case '-':
            out20.innerHTML = `${num1 - num2}`
            break;
        case '*':
            out20.innerHTML = `${num1 * num2}`
            break;
        case '/':
            out20.innerHTML = `${num1 / num2}`
            break;
    }
}














