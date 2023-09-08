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
} from './task';

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
    });
  });

  describe('testing function pow', () => {
    it('should returns a number raised to a power', () => {
      expect(pow(10, 2)).toBe(100);
      expect(pow(2, 0)).toBe(1);
      expect(pow(2, 9)).toBe(512);
    });
  });
});
