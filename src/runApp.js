export function runApp(input, button, texts) {
  if (input.value === '') {
    button.hidden = true;
  }

  function showButton() {
    button.hidden = false;
  }

  function addText() {
    const inputText = input.value;

    const newText = document.createElement('p');
    newText.innerText = inputText;

    if (texts.children.length === 5) {
      const first = document.querySelector('p:first-child');
      first.remove();
      texts.append(newText);
    } else {
      texts.append(newText);
    }

    input.value = '';
    button.hidden = true;
  }

  input.addEventListener('input', showButton);

  button.addEventListener('click', addText);
}
