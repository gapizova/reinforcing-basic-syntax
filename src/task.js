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

/**
 * Arithmetic mean of all odd numbers from 1 to N
 * @function
 * @returns {void}
 */

export function arithmeticMeanOdd() {
  let n = prompt('Введите число: ');
  n = Number(n);
  let sumOdd = 0;
  let oddCount = 0;

  for (let i = 1; i <= n; i += 2) {
    sumOdd += i;
    oddCount++;
  }

  console.log(
    `Среднее арифметическое всех нечётных чисел от 1 до ${n}: ${
      sumOdd / oddCount
    }`,
  );
}

/* Создайте объект user, содержащий поле name со
значением ‘John’.
1. Запросить у пользователя ввод числа. Записать
введенное значение в поле age объекта user.
2. Создать копию объекта user с именем admin.
Добавить новому объекту поле role со значением
‘admin’.
3. *Записать все значения полей объекта admin в
отдельные переменные. Имена переменных
должны совпадать с названиями полей. */

/* let user = {
	name: 'John'
} */

/**
 * Add the age field to the object
 * @param obj {Object}
 * @returns {void}
 */
export function setAge(obj) {
  let valueAge = prompt('Введите возраст: ');
  valueAge = Number(valueAge);
  obj.age = valueAge;
}

/**
 * Create a copy of the object with the role field
 * @param obj {Object}
 * @returns {Object}
 */
export function newUserAdmin(obj) {
  return { ...obj, role: 'admin' };
}

/**
 * Destructuring an object
 * @param {Object} obj - Source object
 * @returns {Object}
 *
 * @example
 * const myObject = { name: 'John', age: 25, role: 'admin' };
 * const { name, age, role } = destructureObject(myObject);
 * console.log(name); // 'John'
 * console.log(age); // 25
 * console.log(role); // 'admin'
 */
export function destructObj(obj) {
  const { ...variables } = obj;
  return variables;
}

/* Создайте массив целых чисел из 10 элементов.
1. Выведите в консоль сумму всех элементов массива.
2. Создайте новый массив на основе исходного, в
котором каждый элемент будет вдвое больше
элемента исходного массива с таким же индексом.
(a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
массив).
3. *Найдите и выведите в консоль наибольший и
наименьший элементы исходного массива. */

/**
 * The sum of all the elements of the array
 * @param arr {Array} - Source array
 * @returns {void}
 */
export function sumArray(arr) {
  console.log(arr.reduce((acc, el) => acc + el, 0));
}

/**
 * Double each element of the array
 * @param arr {Array} - Source array
 * @returns {Array} - New array
 */
export function doubleArray(arr) {
  return arr.map((num) => num * 2);
}

/**
 * The largest and smallest elements of the original array
 * @param arr {Array} - Source array
 * @returns {void}
 */
export function maxAndMinArray(arr) {
  let minElement = Infinity;
  arr.forEach((el) => {
    if (el < minElement) {
      minElement = el;
    }
  });

  const maxElement = Math.max.apply(null, arr);
  console.log(
    `Наименьший элемент в массиве: ${minElement}. Наибольший элемент в массиве: ${maxElement}`,
  );
}

/* 1. Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим.
2. Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
3. *Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x. */

/**
 * The difference between the largest and the smallest
 * @param a {number}
 * @param b {number}
 * @returns {number}
 */
export function diff(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return max - min;
}

/**
 * The function returns true if the string consists of one word and false if it consists of several
 * @param str {string}
 * @returns {boolean}
 */
export function isWord(str) {
  const strArr = str.split(' ');
  return strArr.length === 1;
}

/**
 * Exponentiation of a number
 * @param a {number} - The number to be raised to a power
 * @param x {number} - Degree of number
 * @returns {number}
 */
export function pow(a, x) {
  let powA = 1;
  for (let i = 0; i < x; i++) {
    powA *= a;
  }
  return powA;
}

/* 1. Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.
2. Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня.
3. *В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя. */

/**
 * Print the day of the week of the entered date
 * @returns {void}
 */
export function getDayOfWeek() {
  const dateString = prompt('Введите дату в формате ДД.ММ.ГГГГ');

  const dateParts = dateString.split('.');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const date = new Date(year, month, day);

  const dayOfWeek = date.getDay();

  const daysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  console.log(`День недели: ${daysOfWeek[dayOfWeek]}`);
}

/**
 * Print the number of minutes that have passed since the beginning of today
 * @returns {void}
 */
export function getMinutsToday() {
  const today = new Date();

  const hours = today.getHours();
  const minutes = today.getMinutes();
  const sec = today.getSeconds();

  console.log((hours * 60 + minutes + sec / 60).toFixed(0));
}

/**
 * Identify a younger user
 * @returns {void}
 */
export function whoIsYounger() {
  const user1 = prompt('Введите дату рождения первого пользователя ДД.ММ.ГГГГ');
  const user2 = prompt('Введите дату рождения второго пользователя ДД.ММ.ГГГГ');

  const [day1, month1, year1] = user1.split('.');
  const [day2, month2, year2] = user2.split('.');

  const dayOfBirth1 = new Date(`${year1}-${month1}-${day1}`);
  const dayOfBirth2 = new Date(`${year2}-${month2}-${day2}`);

  if (Number(dayOfBirth1) < Number(dayOfBirth2)) {
    console.log('Первый пользователь моложе');
  } else if (Number(dayOfBirth1) > Number(dayOfBirth2)) {
    console.log('Второй пользователь моложе');
  } else {
    console.log('Возраст пользователей одинаковый');
  }
}

/* 1. Даны длины трёх сторон треугольника. Определить,
  является ли треугольник прямоугольным.
2. Пользователь вводит число R. Написать программу,
  которая выведет в консоль длину окружности и
площадь круга с радиусом R.
3. *Пользователь вводит числа a, b и c. Написать
программу, выводящую корни квадратного
уравнения с коэффициентами a, b и c. */

/**
 * Determines whether the triangle is rectangular
 * @param a {number} - Triangle cathet a
 * @param b {number} - Triangle cathet b
 * @param c {number} - Triangle hypotenuse c
 * @returns {boolean} - true if the triangle is rectangular, else returns false
 */
export function isRightTriangle(a, b, c) {
  return c ** 2 === a ** 2 + b ** 2;
}

/**
 * Print the circumference and the area of the circle with radius R
 * @returns {void}
 */
export function printAreaAndCircumference() {
  let r = prompt('Введите радиус окружности: ');
  r = Number(r);

  const c = 2 * Math.PI * r;

  const s = Math.PI * r ** 2;

  console.log(
    `Длина окружности с радиусом ${r} равна ${Math.round(
      c,
    )}. Площадь круга с радиусом ${r} - ${Math.round(s)}`,
  );
}

/**
 * Calculates the roots of the quadratic equation and print them
 * @returns {void}
 */
export function solveQuadraticEquation() {
  const input = prompt(
    'Введите коэффициенты уравнения - a, b, c - через пробел: ',
  );

  const [a, b, c] = input.split(' ');

  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    console.log('Корней нет');
  } else if (d === 0) {
    const x = -b / (2 * a);
    console.log(`x = ${x}`);
  } else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);

    console.log(`x1 = ${x1}, x2 = ${x2}`);
  }
}

/* Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1. Датой.
2. Адресом электронной почты.
3. *Номером телефона. */

/**
 * Determines that the string is date, phone number or email
 * @param str {string}
 * @returns {void}
 */
export function validator(str) {
  const regexPhoneNumber = /^[\d\\+][\d\(\)\ -]{4,14}\d$/;
  const regexEmail = /^[\w]{1}[\w-\\.]*@[\w-]+\.[a-z]{2,4}$/i;
  const regexDate =
    /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.][0-9]{4}/;

  if (regexPhoneNumber.test(str)) {
    console.log('Это номер телефона');
  } else if (regexEmail.test(str)) {
    console.log('Это адрес электронной почты');
  } else if (regexDate.test(str)) {
    console.log('Это дата');
  } else {
    console.log('Нет совпадений');
  }
}
