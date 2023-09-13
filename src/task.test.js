import {
  sum,
  multiplication,
  totalChars,
  sumDigits,
  maxValue,
  nameMonth,
  inscribedCircle,
  sumNumbers,
  mulTableSeven,
  arithmeticMeanOdd,
  setAge,
  newUserAdmin,
  destructObj,
  sumArray,
  doubleArray,
  maxAndMinArray,
  diff,
  isWord,
  pow,
  getDayOfWeek,
  getMinutsToday,
  whoIsYounger,
  isRightTriangle,
  printAreaAndCircumference,
  solveQuadraticEquation,
  validator,
} from './task.js';

describe('testing function sum', () => {
  it('should adding numbers', () => {
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
  it('should multiplication of numbers', () => {
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
  it('should print total number of characters', () => {
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
  it('should print the sum of the digits of the number', () => {
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
  it('should print the maximum of two numbers', () => {
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
  it('should print name of the month', () => {
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
  it('should print is the circle inscribed', () => {
    jest.spyOn(console, 'log');
    inscribedCircle(5, 7);
    expect(console.log).toBeCalledWith('Круг поместится в квадрат');
    inscribedCircle(3, 3);
    expect(console.log).toBeCalledWith('Круг не поместится в квадрат');
    inscribedCircle(25, 21);
    expect(console.log).toBeCalledWith('Круг не поместится в квадрат');
  });
});

describe('testing function sumNumbers', () => {
  it('should print is the sum of all integers from 50 to 100', () => {
    jest.spyOn(console, 'log');
    sumNumbers();
    expect(console.log).toBeCalledWith('Сумма чисел от 50 до 100: 3825');
  });
});

describe('testing function mulTableSeven', () => {
  it('should print the multiplication table of 7', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    mulTableSeven();

    expect(consoleSpy).toHaveBeenCalledTimes(9);

    expect(consoleSpy.mock.calls[0][0]).toBe('7 x 1 = 7');
    expect(consoleSpy.mock.calls[1][0]).toBe('7 x 2 = 14');
    expect(consoleSpy.mock.calls[2][0]).toBe('7 x 3 = 21');
    expect(consoleSpy.mock.calls[3][0]).toBe('7 x 4 = 28');
    expect(consoleSpy.mock.calls[4][0]).toBe('7 x 5 = 35');
    expect(consoleSpy.mock.calls[5][0]).toBe('7 x 6 = 42');
    expect(consoleSpy.mock.calls[6][0]).toBe('7 x 7 = 49');
    expect(consoleSpy.mock.calls[7][0]).toBe('7 x 8 = 56');
    expect(consoleSpy.mock.calls[8][0]).toBe('7 x 9 = 63');

    consoleSpy.mockRestore();
  });
});

describe('testing function arithmeticMeanOdd', () => {
  it('should print is the arithmetic mean of odd numbers', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    jest.spyOn(window, 'prompt').mockReturnValueOnce('10');
    arithmeticMeanOdd();
    expect(consoleSpy).toBeCalledWith(
      'Среднее арифметическое всех нечётных чисел от 1 до 10: 5',
    );
    jest.spyOn(window, 'prompt').mockReturnValueOnce('100');
    arithmeticMeanOdd();
    expect(consoleSpy).toBeCalledWith(
      'Среднее арифметическое всех нечётных чисел от 1 до 100: 50',
    );
    jest.spyOn(window, 'prompt').mockReturnValueOnce('-20');
    arithmeticMeanOdd();
    expect(consoleSpy).toBeCalledWith(
      'Среднее арифметическое всех нечётных чисел от 1 до -20: NaN',
    );
  });
});

describe('testing object mutation', () => {
  let user;
  beforeEach(() => {
    user = { name: 'John' };
  });

  it('should add the age field to the object', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('25');
    setAge(user);
    expect(user.age).toBe(25);
  });

  it('should create a copy of the object with the role field', () => {
    const admin = newUserAdmin(user);
    expect(admin.name).toBe('John');
    expect(admin.role).toBe('admin');
  });

  it('should destructuring an object', () => {
    const result = destructObj(user);
    expect(result.name).toEqual('John');
  });
});

describe('testing array mutation', () => {
  let arr;
  beforeEach(() => {
    arr = [1, 2, 3, 40, 30, 20, 6, 9, 11, 88];
    jest.spyOn(console, 'log');
  });

  it('should print sum of all the elements of the array', () => {
    sumArray(arr);
    expect(console.log).toBeCalledWith(210);
  });

  it('should returns new array with double each element of the source array', () => {
    const newArr = doubleArray(arr);
    expect(arr).not.toBe(newArr);
    expect(newArr).toEqual([2, 4, 6, 80, 60, 40, 12, 18, 22, 176]);
  });

  it('should print the largest and smallest elements of the original array', () => {
    maxAndMinArray(arr);
    expect(console.log).toBeCalledWith(
      'Наименьший элемент в массиве: 1. Наибольший элемент в массиве: 88',
    );
  });
});

describe('testing function diff', () => {
  it('should returns the difference between the largest and the smallest', () => {
    expect(diff(3, 2)).toBe(1);
    expect(diff(9, 20)).toBe(11);
    expect(diff(0, 2)).toBe(2);
  });
});

describe('testing function isWord', () => {
  it('should returns true if the string consists of one word', () => {
    expect(isWord('Hello world')).toBe(false);
    expect(isWord('Javascript')).toBe(true);
    expect(isWord('')).toBe(true);
    expect(isWord(' hello ')).toBe(true);
  });
});

describe('testing function pow', () => {
  it('should returns a number raised to a power', () => {
    expect(pow(10, 2)).toBe(100);
    expect(pow(2, 0)).toBe(1);
    expect(pow(2, 9)).toBe(512);
  });
});

describe('testing function getDayOfWeek', () => {
  it('should print dey of week', () => {
    const mockConsole = jest.spyOn(console, 'log');

    jest.spyOn(window, 'prompt').mockReturnValueOnce('21.06.2018');
    getDayOfWeek();
    expect(mockConsole).toBeCalledWith('День недели: Четверг');
    jest.spyOn(window, 'prompt').mockReturnValueOnce('24.10.2020');
    getDayOfWeek();
    expect(mockConsole).toBeCalledWith('День недели: Суббота');
    jest.spyOn(window, 'prompt').mockReturnValueOnce('15.02.1988');
    getDayOfWeek();
    expect(mockConsole).toBeCalledWith('День недели: Понедельник');
  });
});

describe('testing function getMinutsToday', () => {
  let mockConsole;
  let mockCurrentTime;
  let mockNow;

  beforeEach(() => {
    mockConsole = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    mockConsole.mockRestore();
    mockCurrentTime.mockRestore();
  });

  it('should print 5 minutes for date = 01.09.2023 00:05:00', () => {
    mockNow = new Date(2023, 8, 1, 0, 5, 0);
    mockCurrentTime = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockNow);
    getMinutsToday();
    expect(mockConsole).toHaveBeenCalledWith('5');
  });

  it('should print 720 minutes for date = 01.09.2023 12:00:00', () => {
    mockNow = new Date(2023, 8, 1, 12, 0, 0);
    mockCurrentTime = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockNow);
    getMinutsToday();
    expect(mockConsole).toHaveBeenCalledWith('720');
  });

  it('should print 1350 minutes for date = 01.09.2023 22:30:00', () => {
    mockNow = new Date(2023, 8, 1, 22, 30, 0);
    mockCurrentTime = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockNow);
    getMinutsToday();
    expect(mockConsole).toHaveBeenCalledWith('1350');
  });
});

describe('testing function whoIsYounger', () => {
  let mockConsole;
  let mockPrompt1;
  let mockPrompt2;

  beforeEach(() => {
    mockConsole = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    mockConsole.mockRestore();
    mockPrompt1.mockRestore();
    mockPrompt2.mockRestore();
  });

  it('should print user1 is younger than user2', () => {
    mockPrompt1 = jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('01.01.2023');
    mockPrompt2 = jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('02.01.2023');

    whoIsYounger();

    expect(mockConsole).toBeCalledWith('Первый пользователь моложе');
  });

  it('should print user2 is younger than user1', () => {
    mockPrompt1 = jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('10.01.2023');
    mockPrompt2 = jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('02.01.2023');

    whoIsYounger();

    expect(mockConsole).toBeCalledWith('Второй пользователь моложе');
  });

  it('should print the age is the same', () => {
    mockPrompt1 = jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('10.01.2023');
    mockPrompt2 = jest
      .spyOn(window, 'prompt')
      .mockReturnValueOnce('10.01.2023');

    whoIsYounger();

    expect(mockConsole).toBeCalledWith('Возраст пользователей одинаковый');
  });
});

describe('testing function isRightTriangle', () => {
  it('should returns true if a = 2.1, b = 2.8, c = 3.5', () => {
    expect(isRightTriangle(2.1, 2.8, 3.5)).toBe(true);
  });

  it('should returns false if a = 1, b = 1, c = 1', () => {
    expect(isRightTriangle(1, 1, 1)).toBe(false);
  });

  it('should returns true if a = 3.5, b = 2.1, c = 2.8', () => {
    expect(isRightTriangle(3.5, 2.1, 2.8)).toBe(true);
  });
});

describe('testing function printAreaAndCircumference', () => {
  let mockConsole;
  beforeEach(() => {
    mockConsole = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    mockConsole.mockRestore();
  });

  it('should print area = 28, circumference = 19 if radius = 3', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('3');
    printAreaAndCircumference();
    expect(mockConsole).toBeCalledWith(
      'Длина окружности с радиусом 3 равна 19. Площадь круга с радиусом 3 - 28',
    );
  });

  it('should print area = 1257, circumference = 126 if radius = 20', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('20');
    printAreaAndCircumference();
    expect(mockConsole).toBeCalledWith(
      'Длина окружности с радиусом 20 равна 126. Площадь круга с радиусом 20 - 1257',
    );
  });
});

describe('testing function solveQuadraticEquation', () => {
  let mockConsole;
  beforeEach(() => {
    mockConsole = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    mockConsole.mockRestore();
  });

  it('should print x1 = 3, x2 = -1 if a = 1, b = -2, c = -3', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('1 -2 -3');
    solveQuadraticEquation();
    expect(mockConsole).toBeCalledWith('x1 = 3, x2 = -1');
  });

  it('should print x = -6 if a = 1, b = 12, c = 36', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('1 12 36');
    solveQuadraticEquation();
    expect(mockConsole).toBeCalledWith('x = -6');
  });

  it('should print there are no roots if a = 1, b = 5, c = 10', () => {
    jest.spyOn(window, 'prompt').mockReturnValueOnce('1 5 10');
    solveQuadraticEquation();
    expect(mockConsole).toBeCalledWith('Корней нет');
  });
});

describe('testing function validator', () => {
  let mockConsole;
  beforeEach(() => {
    mockConsole = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    mockConsole.mockRestore();
  });

  it('should print phone number if str = 8(999)444-55-22', () => {
    validator('8(999)444-55-22');
    expect(mockConsole).toBeCalledWith('Это номер телефона');
  });

  it('should print phone number if str = 89994445522', () => {
    validator('89994445522');
    expect(mockConsole).toBeCalledWith('Это номер телефона');
  });

  it('should print email if str = abc@mail.ru', () => {
    validator('abc@mail.ru');
    expect(mockConsole).toBeCalledWith('Это адрес электронной почты');
  });

  it('should print date if str = 01.01.2023', () => {
    validator('01.01.2023');
    expect(mockConsole).toBeCalledWith('Это дата');
  });

  it('should print no matches if str = hello', () => {
    validator('hello');
    expect(mockConsole).toBeCalledWith('Нет совпадений');
  });
});
