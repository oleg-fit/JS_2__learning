// Здравствуйте. Это домашка прям очень сложно далась мне. И то я не доделал ее. Перерыл интернет чтоб хоть, что то сделать. Очень хотелось, чтоб вы сняли разбор на эту домашку, по возможности конечно. 

// // Task 1.
// // С помощью вложенных циклов и символа * нарисуйте:
// //    *** *** ***

const out1 = document.querySelector('.out1');

for (let i = 1; i <=  3; i++) {
    
    for(let j = 1; j <= 3; j++) {
        out1.innerHTML += '*';
    }

    out1.innerHTML += ' ';
}


// // Task 2.
// // С помощью вложенных циклов и символа * нарисуйте:
// //    *****
// //    *****
// //    *****

const out2 = document.querySelector('.out2');

for (let i = 1; i <=  3; i++) {
    
    for(let j = 1; j <= 5; j++) {
        out2.innerHTML += '*';
    }

    out2.innerHTML += '<br>';
}


// // Task 3.
// // С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в зависимости от того четная или нет переменная внутреннего цикла.
// //    101010
// //    101010
// //    101010

const out3 = document.querySelector('.out3');

for (let i = 1; i <=  3; i++) {
    
    for (let j = 1; j <= 6; j++) {

        if (j % 2 == 0){
            out3.innerHTML += 0;
        } 
        else {
            out3.innerHTML += 1;
        }
    }

    out3.innerHTML += '<br>';
}


// Task 4.
// С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите в зависимости от того четная или нет переменная внутреннего цикла. Каждый третий элемент заменяйте на x:
//    10x01x
//    10x01x
//    10x01x

const out4 = document.querySelector('.out4');

for (let i = 1; i <=  3; i++) {
    
    for (let j = 1; j <= 6; j++) {

        if (j % 2 == 0){

            if (j % 3 == 0) {
                out4.innerHTML += 'x';
            }
            else {
                out4.innerHTML += 0;
            }
        } 
        else {
            
            if (j % 3 == 0) {
                out4.innerHTML += 'x';
            }
            else {
                out4.innerHTML += 1;
            }
        }
    }
    
    out4.innerHTML += '<br>';
}


// Task 5.
// С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***

const out5 = document.querySelector('.out5');

for (let i = 1; i <=  3; i++) {
    
    for (let j = 1; j <= 3; j++) {
        
        if (j <= i) {
            out5.innerHTML += '*';
        }
        else {
            out5.innerHTML += '&nbsp';
        }
    }
    
    out5.innerHTML += '<br>';
}


// Task 6.
// С помощью вложенных циклов и символа * нарисуйте:
//    *****
//    ****
//    ***
//    **
//    *

const out6 = document.querySelector('.out6');

for (let i = 1; i <=  5; i++) {
    
    for (let j = 1; j <= 5; j++) {
        
        if (j <= 5 - i + 1) {
            out6.innerHTML += '*';
        }
        else {
            out6.innerHTML += '&nbsp';
        }
    }
    
    out6.innerHTML += '<br>';
}


// Task 7.
// С помощью вложенных циклов и символа * нарисуйте:
//      *****
//     *****
//    *****

// Не знаю как это делать!


// Task 8.
// С помощью вложенных циклов и символа * нарисуйте:
//    *
//    **
//    ***
//    **
//    *

const out8 = document.querySelector('.out8');

for (let j = 1; j <=  5; j++) {
    
    for (let i = 1; i <= 5; i++) {
        
        if (i <= 5 - j + 1 && i <= j) {
            out8.innerHTML += '*';
        }
        else {
            out8.innerHTML += '&nbsp';
        }
    }
    
    out8.innerHTML += '<br>';
}


// Task 9.
// С помощью вложенных циклов и символа * нарисуйте:
// 	******
// 	*    *
// 	*    *
// 	*    *
//         ******

const out9 = document.querySelector('.out9');

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 6; j++) {

        if (i == 1 || i == 5 || j == 1 || j == 6) {
            out9.innerHTML += '*';
        }
        else if (i == 5) {
            // Не понимаю какое здесь условие должно быть.
        }
        else {
            out9.innerHTML += '&nbsp';
        }

    }
    out9.innerHTML += ' <br>';
}


// Task 10.
// С помощью вложенных циклов и символа который вводит пользователь нарисуйте:
// 	******
// 	*    *
// 	*    *
// 	*    *
//         ******

const out10 = document.querySelector('.out10');
const input10 = document.querySelector('.input__task10');
const btnTask10 = document.querySelector('.btn__task10');


btnTask10.onclick = () => {
    out10.innerHTML = '';
    let input10Value = input10.value;

    for (let i = 1; i <= 5; i++) {

        for (let j = 1; j <= 6; j++) {
    
            if (i == 1 || i == 5 || j == 1 || j == 6) {
                out10.innerHTML += input10Value;
            }
            else if (i == 5) {
                // Не понимаю какое здесь условие должно быть.
            }
            else {
                out10.innerHTML += '&nbsp';
            }
        }

        out10.innerHTML += ' <br>';
    }
}


// Task 11.
// С помощью вложенных циклов вывените таблицу умножения на 6 и 7.

const out11 = document.querySelector('.out11');

for (let i = 6; i <= 7; i++) {

    for (let j = 1; j <= 10; j++) {
        out11.innerHTML += `${i} * ${j} = ${i*j} <br>`
    }

    out11.innerHTML += '<br>';
}


// Task 12.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const out12 = document.querySelector('.out12');

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        out12.innerHTML += ` ${j}`;
    }

    out12.innerHTML += ' <br>';
}


// Task 13.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50

const out13 = document.querySelector('.out13');

for (let i = 0; i <= 4; i++) {

    for (let j = 1; j <= 10; j++) {
        
        if (j === 10) {
            out13.innerHTML += ' ' + (i + 1) + '0';
        }
        else {
            out13.innerHTML += ` ${i}${j}`;
        }
    }

    out13.innerHTML += ' <br>';
}


// Task 14.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

const out14 = document.querySelector('.out14');

for (let i = 5; i >= 1; i--) {

    for (let j = i; j >= 1; j--) {
        out14.innerHTML += ` ${j}`;
    }

    out14.innerHTML += ' <br>';
}


// Task 15.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

const out15 = document.querySelector('.out15');

for (let i = 1; i <=  5; i++) {

    let k = 5;

    for (let j = 1; j <= 5; j++) {
        
        if (j <= 4 - i + 1) {
            out15.innerHTML += 'X ';
        }
        else  {
            out15.innerHTML += ` ${k}`;
        }
        k--;
    }
    
    out15.innerHTML += '<br>';
}


// Task 16.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
//   1
//   2  2
//   3  3  3
//   4  4  4  4
//   5  5  5  5  5

const out16 = document.querySelector('.out16');

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {
        out16.innerHTML += ` ${i}`;
    }

    out16.innerHTML += ' <br>';
}


// Task 17.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5   
// 4  4   
// 3  3  3   
// 2  2  2  2   
// 1  1  1  1  1 

const out17 = document.querySelector('.out17');

for (let i = 5; i >= 1; i--) {

    for (let j = i; j <= 5; j++) {
        out17.innerHTML += ` ${i}`;
    }

    out17.innerHTML += ' <br>';
}


// Task 18.
// С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
//   5
//   X  X
//   3  3  3
//   X  X  X  X
//   1  1  1  1  1

const out18 = document.querySelector('.out18');

for (let i = 5; i >= 1; i--) {

    for (let j = i; j <= 5; j++) {

        if (i % 2 == 0) {
            out18.innerHTML += ` X`;
        }
        else {
            out18.innerHTML += ` ${i}`;
        }
    }

    out18.innerHTML += ' <br>';
}


// Task 19.
// С помощью вложенных циклов и символа * нарисуйте:
//      *****
//     *******
//    *********

const out19 = document.querySelector('.out19');

for (let j = 7; j <=  9; j++) {
    
    for (let i = 1; i <= 9; i++) {
        
        if (i >= 9 - j + 1 && i <= j) {
            out19.innerHTML += '*';
        }
        else {
            out19.innerHTML += '&nbsp';
        }
    }
    
    out19.innerHTML += '<br>';
}


// Task 20.
// С помощью вложенных циклов и символа * нарисуйте:
//      **
//     ****
//    ******
//     ****
//      **

// Не знаю как это делать!

const out20 = document.querySelector('.out20');

for (let j = 4; j <=  6; j++) {
    
    for (let i = 1; i <= 6; i++) {
        
        if (i >= 6 - j + 1 && i <= j) {
            out20.innerHTML += '*';
        }
        else {
            out20.innerHTML += '&nbsp';
        }
    }
    
    out20.innerHTML += '<br>';
}
