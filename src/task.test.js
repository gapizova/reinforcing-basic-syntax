import { sum, multiplication, totalChars, sumDigits } from './task';

describe('testing function sum', () => {
  it('adding numbers', () => {
    jest.spyOn(console, 'log');
    sum(5, 2);
    expect(console.log).toBeCalledWith('Сумма 5 и 2: 7');
    sum(100, 1000);
    expect(console.log).toBeCalledWith('Сумма 100 и 1000: 1100');
    sum(-1, 0);
    expect(console.log).toBeCalledWith('Сумма -1 и 0: -1');
  });
});

describe('testing function multiplication', () => {
  it('multiplication of numbers', () => {
    jest.spyOn(console, 'log');
    multiplication(5, 5);
    expect(console.log).toBeCalledWith('Произведение 5 и 5: 25');
    multiplication(0, 1000);
    expect(console.log).toBeCalledWith('Произведение 0 и 1000: 0');
    multiplication(-100, 25);
    expect(console.log).toBeCalledWith('Произведение -100 и 25: -2500');
  });
});

describe('testing function totalChars', () => {
  it('total number of characters', () => {
    jest.spyOn(console, 'log');
    totalChars('aaa', 'bb');
    expect(console.log).toBeCalledWith('Суммарное количество символов: 5');
    totalChars('java', 'script');
    expect(console.log).toBeCalledWith('Суммарное количество символов: 10');
    totalChars('hello', '!');
    expect(console.log).toBeCalledWith('Суммарное количество символов: 6');
    totalChars('', '');
    expect(console.log).toBeCalledWith('Суммарное количество символов: 0');
  });
});

describe('testing function sumDigits', () => {
  it('outputs the sum of the digits of the number', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('357');
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();
    sumDigits();
    expect(consoleLogMock).toHaveBeenCalledWith(
      'Сумма цифр введенного числа 357 равна: 15',
    );
    jest.spyOn(window, 'prompt').mockReturnValueOnce('123');
    sumDigits();
    expect(consoleLogMock).toHaveBeenCalledWith(
      'Сумма цифр введенного числа 123 равна: 6',
    );
    jest.spyOn(window, 'prompt').mockReturnValueOnce('001');
    sumDigits();
    expect(consoleLogMock).toHaveBeenCalledWith(
      'Сумма цифр введенного числа 1 равна: 1',
    );
  });
});
