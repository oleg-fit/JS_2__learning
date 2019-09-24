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

cleanInput = function() {
    inputTask4Num1.value = '';
    inputTask4Num2.value  = '';
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

    cleanInput();
}


// Task 5.
// Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения больше или равен 2000 - выводит в консоль возраст пользователя.

const inputTask5 = document.querySelector('task5__input');
const btnTask5 = document.querySelector('.task5__btn');
const out5 = document.querySelector('.out5');

out5.onclick = () => {
    let yearOfBirthUser5 = +inputTask5.value;
    let yearNow5 = 2019;
    let comparativeYear = 2000;
    let age5 = yearNow5 - yearOfBirthUser5;
    
    if (yearOfBirthUser5 < comparativeYear) {
        out5.innerHTML = age5;
    }
    else if (yearOfBirthUser5 > comparativeYear || yearOfBirthUser5 == comparativeYear) {
        console.log(age5);
    }
}



// Task 6.
// Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, что такая квартира есть,если другое число - сообщение о том, что квартира не существует.



// Task 7.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - большие или меньше нуля это число.



// Task 8.
// Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.



// Task 9.
// Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите в степень из второго input. Результат выведите на страницу. Как возвести в степень? Читаем!



// Task 10.
// Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'), но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...



// Task 11.
// Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, если нет - сообщение с содержимым input.



// Task 12.
// Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. Для решения используйте switch.



// Task 13.
// Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.



// Task 14.
// Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. Больше 600 - смертность 100%. Вывод результатов сделайте на страницу.



// Task 15.
// Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.



// Task 16.
// В Казахстане, налог на объем двигателя составляет:
//     от 0 до 499 кубов - 2525 тенге
//     от 500 до 1199 кубов - 5050 тенге
//     от 1200 до 1599 кубов - 8275 тенге
//     от 1600 до 1899 кубов - 9675 тенге
//     от 1900 до 1999 кубов - 11075тенге
//     от 2000 и выше кубов - 15000 тенге

// Напишите программу, где пользователь может ввести в input объем двигателя и получить налог на данный двигатель.



// Task 17.
// Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.


// Task 18.
// Проделайте предыдущую задачу с помощью switch case.




// Task 19.
// Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.




// Task 20.
// Проделайте предыдущую задачу с помощью switch case.
















