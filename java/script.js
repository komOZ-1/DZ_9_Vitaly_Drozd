//Задание 1
document.write('Task 1) Выведите числа от 1 до 50 и от 35 до 8.' + '</br>')
function writeNumbers1(){
    let i = 0
    let j = 0
    for (let i = 1; i <= 50; i++ ) {
        document.write(i + ' ')
    }

    for (let j = 35; j >= 8; --j) {
        document.write(j + ' ')

    }
}
writeNumbers1()

//Задание 2
document.write('</br>' + 'Task 2) Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа \n' +
    'тегом <br /> друг от друга, чтобы получить столбец, а не строку.\n')
function writeNumbers2() {
    let a = 89
    while (a >= 11) {
        if ( a >= 11) {
            document.write('</br>' + a + '\n')
        }


        --a;
    }
}
writeNumbers2()

//Задание 3
document.write('</br>' + 'Task 3) С помощью цикла найдите сумму чисел от 0 до 100.')
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
document.write('</br>' + sum);

//Задание 4
document.write('</br>' + 'Task 4) Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6 \n' +
    '(1+2+3).')
sum = 0;
for (let i = 1; i <= 5; i++) {
    document.write('</br>' + `${i} = ${sum+= i}`);
}

//Задание 5
document.write('</br>' + 'Task 5) Выведите чётные числа от 8 до 56. Решить задание через while и for </br>')
for (let i = 8; i <=56; i++) {
    if (i%2 == 0) {
        document.write(i + ' ');
    }
}

i = 8;

while (i <= 56) {
    if (i%2 == 0) {
        document.write(i + ' ');
    }
    i++
}

//Задание 6
document.write('</br>' + 'Task 6) Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:\n' + '</br>')
for (let i = 2; i < 10; i++) {
    for (let j = 2; j < 10; j++){
        document.write(`${i} * ${j} = ${i*j}` + ' | ');
    }
}

//Задание 7
document.write('</br>' + 'Task 7) Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет \n' +
    'меньше 50. Какое число получится? Посчитайте количество итераций, необходимых \n' +
    'для этого (итерация - это проход цикла), и запишите его в переменную num.' + '</br>')
let n = 1000
let num = 0

while (true){
    num++;
    n = n / 2;



    if (n < 50) {
        break;
    }
}
document.write(`ответ: ${n} итерации: ${num}` )

// Задание 8
document.write('</br>' + 'Task 8) Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до \n' +
    'тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите \n' +
    'общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не \n' +
    'число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь \n' +
    'может ввести отрицательное значение' + '</br>')
let usernumbers,
    summa = 0,
    average = 0,
    p = 0;

while(true) {
    usernumbers = +prompt("Введите число, для остановки введите 0", '');
    if (usernumbers == 0) {
        break;
    } else if (isNaN(usernumbers)) {
        document.write(('Это не число'))
        continue;
    }
    p++;
    summa += usernumbers;
    average = summa / p;
}
document.write(('</br>' + `сумма введённых чисел ${summa} среднее арифметическое введённых чисел ${average}`));

//Задание 9
document.write('</br>' + 'Task 9) Дана строка с числами разделенными пробелами «4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57».\n' +
'Найдите самое большое и самое маленькое число в строке, используя цикл.' + '</br>')

let s = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    max = 0,
    min;
str = s.split(' ');
for (let i = 0; i < str.length; i++) {
    let num = Number(str[i]);
    if (min == null){
        min = num
    }
    if (max < num) {
        max = num;
    } else if (min > num) {
        min = num;
    }
}
document.write(`Самое большое число: ${max}  Самое маленькое число:${min}`)


//Задание 10
document.write('</br>' + 'Task 10)Дано произвольное целое число n. Написать программу, которая:\n'+
'a. разбивает число n на цифры и выводит их на экран;\n' +
'b. подсчитывает сколько цифр в числе n;\n' +
'c. находит сумму цифр числа n;' + '</br>')

let t = 4256985,
    stNum = t.toString(),
    summ = 0;
st = stNum.split('');
document.write('a) ' + st + '</br>');
document.write('b) ' + st.length + '</br>');

for (let i = 0; i < st.length; i++)
    summ += Number(st[i]);
document.write('c) ' + summ + '</br>')

function reversedNum(t) {
    return t
                .toString()
                .split('')
                .reverse()
                .join('')
}
 document.write('d) + 'reversedNum(t))



















