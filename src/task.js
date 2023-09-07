/* 1. В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел.
2. В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обеих строках.
3. *Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа. */

/**
 * Product and sum of numbers
 * @function
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {void}
 */
export function sum(a, b) {
  console.log(`Сумма ${a} и ${b}: ${a + b}`);
}
export function multiplication(a, b) {
  console.log(`Произведение ${a} и ${b}: ${a * b}`);
}

/**
 * Total number of characters
 * @function
 * @param {string} str1 - the first word
 * @param {string} str2 - the second word
 * @returns {void}
 */

export function totalChars(str1, str2) {
  console.log(`Суммарное количество символов: ${str1.length + str2.length}`);
}

/**
 * The sum of the digits of the number
 * @function
 * @returns {void}
 */

export function sumDigits() {
  let num = prompt('Введите трехзначное число: ');

  num = Number(num);
  const digit3 = num % 10;
  const digit1 = (num - (num % 100)) / 100;
  const digit2 = (num - digit1 * 100 - digit3) / 10;

  console.log(
    `Сумма цифр введенного числа ${num} равна: ${digit1 + digit2 + digit3}`,
  );
}

/* 1. В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
2. Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
3. *В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат. */

/**
 * The largest of the two numbers
 * @function
 * @param {number} a - the first number
 * @param {number} b - the second number
 * @returns {void}
 */

export function maxValue(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

/**
 * Print the name of the month
 * @function
 * @returns {void}
 */

export function nameMonth() {
  let num = prompt('Введите число от 1 до 12: ');

  num = Number(num);

  switch (num) {
    case 1:
      console.log('Январь');
      break;
    case 2:
      console.log('Февраль');
      break;
    case 3:
      console.log('Март');
      break;
    case 4:
      console.log('Апрель');
      break;
    case 5:
      console.log('Май');
      break;
    case 6:
      console.log('Июнь');
      break;
    case 7:
      console.log('Июль');
      break;
    case 8:
      console.log('Август');
      break;
    case 9:
      console.log('Сентябрь');
      break;
    case 10:
      console.log('Октябрь');
      break;
    case 11:
      console.log('Ноябрь');
      break;
    case 12:
      console.log('Декабрь');
      break;
  }
}

/**
 * A function that determines whether a circle will fit into a square
 * @function
 * @param {number} circle - circle area
 * @param {number} square - square area
 * @returns {void}
 */

export function inscribedCircle(circle, square) {
  const diameterCircle = Math.sqrt(circle / Math.PI) * 2;
  const sideSquare = Math.sqrt(square);

  if (sideSquare >= diameterCircle) {
    console.log('Круг поместится в квадрат');
  } else {
    console.log('Круг не поместится в квадрат');
  }
}

/* 1. Вывести в консоль сумму всех целых чисел от 50 до
100.
2. Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
3. *Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N. */

/**
 * The sum of all integers from 50 to 100
 * @function
 * @returns {void}
 */

export function sumNumbers() {
  let add = 0;

  for (let i = 50; i <= 100; i++) {
    add += i;
  }

  console.log(`Сумма чисел от 50 до 100: ${add}`);
}

/**
 * Multiplication table by 7
 * @function
 * @returns {void}
 */

export function mulTableSeven() {
  for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
  }
}
