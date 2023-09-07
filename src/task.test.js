import {
  sum,
  multiplication,
  totalChars,
  sumDigits,
  maxValue,
  nameMonth,
  inscribedCircle,
} from './task';

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
  it('print total number of characters', () => {
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
  it('print the sum of the digits of the number', () => {
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

describe('testing function maxValue', () => {
  it('print the maximum of two numbers', () => {
    jest.spyOn(console, 'log');
    maxValue(10, 5);
    expect(console.log).toBeCalledWith(10);
    maxValue(2, 2);
    expect(console.log).toBeCalledWith(2);
    maxValue(-5, 5);
    expect(console.log).toBeCalledWith(5);
  });
});

describe('testing function nameMonth', () => {
  it('print name of the month', () => {
    const consoleLogMock = jest.spyOn(console, 'log').mockImplementation();

    jest.spyOn(window, 'prompt').mockReturnValueOnce('2');
    nameMonth();
    expect(consoleLogMock).toHaveBeenCalledWith('Февраль');
    jest.spyOn(window, 'prompt').mockReturnValueOnce('12');
    nameMonth();
    expect(consoleLogMock).toHaveBeenCalledWith('Декабрь');
    jest.spyOn(window, 'prompt').mockReturnValueOnce('6');
    nameMonth();
    expect(consoleLogMock).toHaveBeenCalledWith('Июнь');
  });
});

describe('testing function inscribedCircle', () => {
  it('print is the circle inscribed', () => {
    jest.spyOn(console, 'log');
    inscribedCircle(5, 7);
    expect(console.log).toBeCalledWith('Круг поместится в квадрат');
    inscribedCircle(3, 3);
    expect(console.log).toBeCalledWith('Круг не поместится в квадрат');
    inscribedCircle(25, 21);
    expect(console.log).toBeCalledWith('Круг не поместится в квадрат');
  });
});
