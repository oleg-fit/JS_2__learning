// Task 1. 
// Создайте button - при нажатии на него выводите alert с номером задачи.

const btnTask1 = document.querySelector('.task1__btn');

btnTask1.onclick = () => {
    alert('Task 1.');
}


// Task 2.
// Создайте input type=button - при нажатии на него выводите alert с номером задачи.

const btnTask2 = document.querySelector('.task2__btn');

btnTask2.onclick = () => {
    alert('Task 2.');
}


// Task 3.
// Создайте p - при нажатии на него выводите alert с номером задачи.

const pTask3 = document.querySelector('.task3__p');

pTask3.onclick = () => {
    alert('Task 3.');
}


// Task 4.
// Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.

const inputTask4 = document.querySelector('.task4__input');
const btnTask4 = document.querySelector('.task4__btn');

btnTask4.onclick = () => {
    if(inputTask4.checked == true) {
        alert('true');
    }
    else {
        alert('false');
    }
}


// Task 5.
// Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.

const inputTask5 = document.querySelector('.task5__input');
const btnTask5 = document.querySelector('.task5__btn');

btnTask5.onclick = () => {
    if(inputTask5.checked == true) {
        alert(inputTask5.value);
    }
    else {
        alert('false');
    }
}


// Task 6.
// Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.

const inputTask6 = document.querySelector('.task6__input');
const btnTask6 = document.querySelector('.task6__btn');

btnTask6.onclick = () => {
    alert(inputTask6.value);
}


// Task 7.
// Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. Выводите в консоль предупреждение, если длина пароля меньше 6 символов.

const inputTask7 = document.querySelector('.task7__input');
const btnTask7 = document.querySelector('.task7__btn');

btnTask7.onclick = () => {
    alert(inputTask7.value);
    if(inputTask7.value.length < 6) {
        console.log('Пароль меньше шести символов');
    }
}


// Task 8.
// Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.

const divTask8 = document.querySelector('.task8__div');
const btnTask8 = document.querySelector('.task8__btn');


btnTask8.onclick = () => {
    divTask8.innerHTML = `<input class="task8__input" type="text"> 
                          <button class="task8__btn2">Push me</button>` 

    const inputTask8 = document.querySelector('.task8__input');
    const btn2Task8 = document.querySelector('.task8__btn2');
        
    btn2Task8.onclick = () => {
        alert(inputTask8.value);
    }
}


// Task 9.
// Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным в активном (если он активен, если нет - то alert - false) radiobutton.

const inputTask9 = document.querySelector('.task9__input');
const btnTask9 = document.querySelector('.task9__btn');

btnTask9.onclick = () => {
    if(inputTask9.checked == true) {
        alert(inputTask9.value);
    }
    else {
        alert('false');
    }
}


// Task 10.
// Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.

const inputTask10 = document.querySelector('.task10__input');
const btnTask10 = document.querySelector('.task10__btn');
const divTask10 = document.querySelector('.wrapper__task10')

btnTask10.onclick = () => {
    let colorTask10 = inputTask10.value;

    divTask10.style.backgroundColor = colorTask10;
}


// Task 11.
// Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.

const inputTask11 = document.querySelector('.task11__input');
const input2Task11 = document.querySelector('.task11__input2');
const btnTask11 = document.querySelector('.task11__btn');

btnTask11.onclick = () => {
    input2Task11.value = inputTask11.value
}


// Task 12.
// Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.

const inputTask12 = document.querySelector('.task12__input');
const btnTask12 = document.querySelector('.task12__btn');
const divOut12 = document.querySelector('.out12');

btnTask12.onclick = () => {
    divOut12.innerHTML = inputTask12.value;
}


// Task 13.
// Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. Добавьте событие oninput на range и тоже выводите значение на страницу.

const inputTask13 = document.querySelector('.task13__input');
const btnTask13 = document.querySelector('.task13__btn');
const div1Out13 = document.querySelector('.out13_1');
const div2Out13 = document.querySelector('.out13_2');

btnTask13.onclick = () => {
    div1Out13.innerHTML = inputTask13.value;
}

inputTask13.oninput = () => {
    div2Out13.innerHTML = inputTask13.value;
    console.log(inputTask13.value);
}


// Task 14.
// Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.

const textareaTask14 = document.querySelector('.task14__textarea');
const btnTask14 = document.querySelector('.task14__btn');
const divOut14 = document.querySelector('.out14');

btnTask14.onclick = () => {
    divOut14.innerHTML = textareaTask14.value;
}


// Task 15.
// Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.

const textareaTask15 = document.querySelector('.task15__textarea');
const inputTask15 = document.querySelector('.task15__input')
const btnTask15 = document.querySelector('.task15__btn');
const divOut15 = document.querySelector('.out15');

btnTask15.onclick = () => {
    textareaTask15.value = inputTask15.value;
    divOut15.innerHTML = inputTask15.value;
}


// Task 16.
// Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.

const selectTask16 = document.querySelector('.task16__select')
const btnTask16 = document.querySelector('.task16__btn');
const divOut16 = document.querySelector('.out16');

btnTask16.onclick = () => {
    divOut16.innerHTML = selectTask16.value;
}    


// Task 17.
// Эту задачу пока не делаем!!!!!



// Task 18.
// Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.

const selectTask18 = document.querySelector('.task18__select')
const btnTask18 = document.querySelector('.task18__btn');
const divOut18 = document.querySelector('.out18');

selectTask18.onchange = () => {
    divOut18.innerHTML = selectTask18.value;
}    


// Task 19.
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!.

const inputTask19 = document.querySelector('.task19__input')
const input2Task19 = document.querySelector('.task19__input2')
const btnTask19 = document.querySelector('.task19__btn');

btnTask19.onclick = (event) => {
    event.preventDefault();
    console.log(inputTask19.value);
    console.log(input2Task19.value);
}


// Task 20.
// Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль! Используйте form.elements (читать)

const formTask20 = document.querySelector('.task20__form');
const btnTask20 = document.querySelector('.task20__btn');

btnTask20.onclick = (event) => {
    event.preventDefault();
    console.log(formTask20[0].value);
    console.log(formTask20[1].value);
}
