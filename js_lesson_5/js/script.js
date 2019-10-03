// Task 1.
// Выведите в консоль с помощью цикла числа от 1 до 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}


// Task 2.
// Выведите на страницу с помощью цикла числа от 1 до 10.

const out2 = document.querySelector('.out2');

for (let i = 0; i <= 10; i++) {
    out2.innerHTML += i + ' ';
}


// Task 3.
// Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.

const out3 = document.querySelector('.out3');

for (let i = 10; i >= 0; i--) {
    out3.innerHTML += i + ' ';
}


// Task 4.
// Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.

const out4 = document.querySelector('.out4');

for (let i = 0; i <= 10; i += 2) {
    out4.innerHTML += i + ' ';
}


// Task 5.
// Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.

const out5 = document.querySelector('.out5');

for (let i = 21; i >= 0; i -= 3) {
    out5.innerHTML += i + ' ';
}


// Task 6.
// Используя строку ****** - нарисуйте квадрат 6х6 и выведите его на страницу.

const out6 = document.querySelector('.out6');

for (let i = 0; i <= 6; i++) {
    let str = '******';
    out6.innerHTML += str + '<br>';
}
// Не совсем конечно квадрат получился


// Task 7.
// Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от введенного пользователем в input до нуля.

const inputTask7 = document.querySelector('.input__task7');
const btnTask7 = document.querySelector('.btn__task7');
const out7 = document.querySelector('.out7');

btnTask7.onclick = () => {
    let inputValue = +inputTask7.value;

    for (let i = inputValue; i >= 0; i--) {
        out7.innerHTML += i + ' ';
    }
}


// Task 8.
// Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне введенных пользователем чисел. Считаем что второе число всегда больше первого.

const inputTask8Num1 = document.querySelector('.input__task8-1');
const inputTask8Num2 = document.querySelector('.input__task8-2');
const btnTask8 = document.querySelector('.btn__task8');
const out8 = document.querySelector('.out8');

btnTask8.onclick = () => {
    let inputValue1 = +inputTask8Num1.value;
    let inputValue2 = +inputTask8Num2.value;

    for (let i = inputValue1; i <= inputValue2; i++) {
        out8.innerHTML += i + ' ';
    }
}


// Task 9.
// Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше первого - то делаем вывод, если нет - выводим alert о ошибке.

const inputTask9Num1 = document.querySelector('.input__task9-1');
const inputTask9Num2 = document.querySelector('.input__task9-2');
const btnTask9 = document.querySelector('.btn__task9');
const out9 = document.querySelector('.out9');

btnTask9.onclick = () => {
    let inputValue1 = +inputTask9Num1.value;
    let inputValue2 = +inputTask9Num2.value;

    if (inputValue2 > inputValue1) {
        for (let i = inputValue1; i <= inputValue2; i++) {
            out9.innerHTML += i + ' ';
        }
    }
    else {
        alert('Ошибка! Второе число меньше первого!');
    }
}


// Task 10.
// Выведите на страницу все четные годы в промежутке от 1901 до 1950.

const out10 = document.querySelector('.out10');

for (let i = 1901; i <= 1950; i++) {
    if (i % 2 == 0) {
        out10.innerHTML += i + ' ';
    } 
}


// Task 11.
// Создайте несколько div.one. С помощью length выведите количество div.one на странице.

let oneDivsTask11 = document.querySelectorAll('.one');
const out11 = document.querySelector('.out11');

out11.innerHTML = oneDivsTask11.length;

// Task 12.
// Создайте кнопку, при нажатии на которую запускается функция. Функция окрашивает все div.one в оранжевый цвет.

const btnTask12 = document.querySelector('.btn__task12');

btnTask12.onclick = () => {
    for (let i = 0; i < oneDivsTask11.length; i++) {
        oneDivsTask11[i].style.backgroundColor = 'orange';
    }
}


// Task 13.
// Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль содержимое всех div.one.

const btnTask13 = document.querySelector('.btn__task13');

btnTask13.onclick = () => {
    for (let i = 0; i < oneDivsTask11.length; i++) {
        console.log(oneDivsTask11[i].innerHTML);
    }
}


// Task 14.
// Создайте кнопку, при нажатии на которую запускается функция. Функция для всех input[type="text"] устанавливает свойство placeholder = 'Введите данные'

const btnTask14 = document.querySelector('.btn__task14');
let InputText14 = document.querySelectorAll('input[type="text"]');

btnTask14.onclick = () => {
    for (let i = 0; i < InputText14.length; i++) {
        InputText14[i].placeholder = 'Введите данные';
    }
}


// Task 15.
// Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль количество input[type="text"]

const btnTask15 = document.querySelector('.btn__task15');

btnTask15.onclick = () => {
    console.log(InputText14.length);
}


// Task 16.
// Создайте три связанных radiobutton[name="p1"]. Задайте им value. При нажатии на кнопку выводите на страницу value выбранного.

const btnTask16 = document.querySelector('.btn__task16');
let inputRadio16 = document.querySelectorAll('input[name="p1"]')
const out16 = document.querySelector('.out16');

btnTask16.onclick = () => {
    for (let i = 0; i < inputRadio16.length; i++) {
        if(inputRadio16[i].checked) {
            out16.innerHTML = inputRadio16[i].value;
        }
    }
}


// Task 17.
// Добавьте кнопку. При нажатии кнопки делайте первый из созданных radiobutton в примере выше - checked.

const btnTask17 = document.querySelector('.btn__task17');

btnTask17.onclick = () => {
    inputRadio16[0].checked = true;
}


// Task 18.
// Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. Первому элементу присвойте value = 0, второму value = 1 и т.д.

const btnTask18 = document.querySelector('.btn__task18');

btnTask18.onclick = () => {
    for (let i = 0; i < inputRadio16.length; i++) {
        console.log('sdsd');
        inputRadio16[i].value = i;
    }
}


// Task 19.
// Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при нажатии на котору проверяйте value выбранного элемента. Если оно не равно 6 - выводите false, если равно - true.

const btnTask19 = document.querySelector('.btn__task19');
const out19 = document.querySelector('.out19');
let inputRadio19 = document.querySelectorAll('input[name="p2"]');

btnTask19.onclick = () => {
    for (let i = 0; i < inputRadio19.length; i++) {
        if(inputRadio19[i].checked) {
            if(inputRadio19[i].value != 6) {
                out19.innerHTML = 'false';
            }
            else { 
                out19.innerHTML = 'true';
            }
        }
    }
}


// Task 20.
// Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. При изменении состояния input - выводите в консоль текст "был изменен input"

let inputRadio20 = document.querySelectorAll('input[name="p3"]');
for (let i = 0; i < inputRadio20.length; i++) {
    inputRadio20[i].oninput = () => {
        console.log('был изменен input');
    }
}





































