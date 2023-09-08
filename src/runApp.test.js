import { runApp } from './runApp';

const input = document.createElement('input');
const button = document.createElement('button');
const texts = document.createElement('div');

it('should add text and hidden button', () => {
  input.value = 'Hello World';

  runApp(input, button, texts);

  button.click();

  expect(texts.children.length).toBe(1);
  expect(input.value).toBe('');
  expect(button.hidden).toBe(true);
});

it('should if input not empty button visible', () => {
  runApp(input, button, texts);

  input.value = 'Hello World';
  input.dispatchEvent(new Event('input'));

  expect(button.hidden).toBe(false);
});
