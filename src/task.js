/* 1. В переменных a и b хранятся числа. Написать
программу, которая выводит в консоль произведение
и сумму этих чисел.
2. В двух переменных хранятся строки символов.
Написать программу, которая выведет в консоль
суммарное количество символов в обеих строках.
3.*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа. */

/**
 * Product and sum of numbers
 * @function
 * @param {number} a
 * @param {number} b
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
 * @param {string} str1
 * @param {string} str2
 */

export function totalChars(str1, str2) {
  console.log(`Суммарное количество символов: ${str1.length + str2.length}`);
}
