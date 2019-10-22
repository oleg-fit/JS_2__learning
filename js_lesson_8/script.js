// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while

function func_1() {

    let k = 0;
    let str = '';

    while (k <= 100) {
        str += `${k} `;
        k++;
    }

    return str;
}

console.log('Task 1');
console.log(func_1());


// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while

function func_2(a, b) {

    let str = '';

    while (a <= b) {

        str += `${a} `;
        a++;
    }

    return str;
}

console.log('Task 2');
console.log(func_2(7, 23));


// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while

function func_3(a, b) {

    let str = '';

    if (a > b) {

        while (a >= b) {
            
            str += `${a } `;
            a--;
        }
    }
    else if (a < b) {

        while (b >= a) {
            
            str += `${b } `;
            b--;
        }
    }
    else {
        
        str = `${a}`;
    }

    return str;
}

console.log('Task 3');
console.log(func_3(17, 10));


// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while

function func_4(a, b, c) {

    let str = '';

    if (a > b) {

        while (a >= b) {
            
            str += `${a } `;
            a -= c;
        }
    }
    else if (a < b) {

        while (b >= a) {
            
            str += `${b } `;
            b -= c;
        }
    }
    else {
        
        str = `${a}`;
    }

    return str;
}

console.log('Task 4');
console.log(func_4(21, 40, 4));


// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

function func_5() {
    
    let sum = 0;
    let k = 0;

    while (k <= 20) {
        sum += k;
        k++;
    }

    return sum;
}

console.log('Task 5');
console.log(func_5());


// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_6(a, b) {

    if (b > a) {

        let sum = 0;

        while (a <= b) {

            sum += a;
            a++;
        }

        return sum;
    }
    else {

        return false;
    }
}

console.log('Task 6');
console.log(func_6(1, 3));


// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.

function func_7(a, b) {

    if (b > a) {

        let sum = 1;

        while (a <= b) {

            sum *= a;
            a++;
        }

        return sum;
    }
    else {

        return false;
    }
}

console.log('Task 7');
console.log(func_7(1, 4));


// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.

function func_8() {

    let coin = 333;
    let day = 0;

    while (coin <= 1000000) {

        day++;
        coin *= 2;
        
    }

    return day;
}

console.log('Task 8');
console.log(func_8());


// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго введенного параграфа, где все четные числа заменены на символ нуля(0).

function func_9(a, b) {

    let str = '';

    while (a <= b) {

        if (a % 2 == 0) {
            str += '0';
        } 
        else {
            str += a;
        }

        a++;
    }
    
    return str;
}

console.log('Task 9');
console.log(func_9(1, 8));


// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через
//         while):
//     **
//     *
//     **
//     *
//     **
//     *

const p10 = document.querySelector('.task-10');   /* Создал чтоб проверить себя! */

function func_10() {

    let str = '';
    let a = 1;
    let k = '**';
    let j = '*';

    while (a <= 6) {
        
        if (a % 2 == 0) {
            str += `${j}<br>`;
        }
        else {
            str += `${k}<br>`;
        }
        
        a++;
    }
    
    return str;
}

console.log('Task 10');
console.log(func_10());


p10.innerHTML = func_10();    /* Проверяю себя */


// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {

    let str = '';
    let a = 1;
    let k = 10;
    let j = 1;

    while (a <= 20) {
        
        if (a % 2 == 0) {
            str += `${j} `;
            j++;
        }
        else {
            str += `${k} `;
            k--;
        }
        
        a++;
    }
    
    return str;
}

console.log('Task 11');
console.log(func_11());


// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do
//     console.log('do while work');
// while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }

// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.

function func_12() {

    let a = 0;

    do
        console.log('do while work');
    while (a < 0);

    let b = 0;

    while (b < 0) {
        console.log('while work');
    }
}

console.log('Task 12');
console.log(func_12());


// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.

function func_13() {

    let str = '';
    let i = 100;

    do {

        str += `${i} `;
        i--;

    } while (i >= 0);

    return str;
}

console.log('Task 13');
console.log(func_13());


// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 30% больше предыдущего.

function func_14() {

    let coal = 5;
    let day = 1;

    do {

        day++;
        coal += coal * 0.3;
        
    } while (coal <= 132);

    return day;
}

console.log('Task 14');
console.log(func_14());


// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.

function func_15() {

    let liter = 1.1;
    let sum = 1.1;
    let day = 1;

    do {
        
        day++;
        liter += liter * 0.3;
        sum += liter;
        
    } while (sum<= 568);

    return day;
}

console.log('Task 15');
console.log(func_15());


// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.

function func_16() {

    let p = document.querySelectorAll('.task-16');
    let sum = 0;

    do {
        
        sum++;
        
    } while (sum < p.length);

    if (sum % 2 == 0) {
        return sum;
    }
    else {
        return false;
    }
}

console.log('Task 16');
console.log(func_16());


// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, во второй 2 и т.д.Решение оформите в виде функции func_17.

function func_17() {

    let p = document.querySelectorAll('.task-16');
    let i = 0;
    let k = 1;

    do {
        
        p[i].innerHTML = k;
        i++;
        k++;
        
    } while (i < p.length);
}

func_17();  


// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.

function func_18() {

    let p = document.querySelectorAll('.task-18');
    let j = p.length;
    let i = 0;

    do {
        
        p[i].innerHTML = j;
        i++;
        j--;
        
    } while (i < p.length);
}

func_18();  


// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.

function func_19() {

    let str = '';
    let a = 1;

    do {

        if (a % 2 == 0) {
            str += '*';
        } 
        else {
            str += a;
        }

        a++;
        

    } while (a <= 19)

    
    return str;
}

console.log('Task 19');
console.log(func_19());

// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1

let p20 = document.querySelector('.task-20');

function func_20() {

    let str = '';
    let p = 0;

    while (p <= 4) {

        let flag = 0;

        while(flag <= 4) {

            if (flag == p) {
                str += '1 ';
            }
            else {
                str += '* ';
            }

            flag++;
        }

        str += '<br>';
        p++;
    }

    return str;
}

p20.innerHTML = func_20();