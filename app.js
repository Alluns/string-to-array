let singleQuote = true;
let stringifyNumbers = false;
let format = 'Raw';

function convertToArray(input) {
  let data = input;

  data = data
    .split(',')
    .map((element) => element.trim())
    .filter((element) => element.length > 0);

  document.getElementById('output').value = formatOutput(data);
}

function formatOutput(input) {
  if (format == 'Raw') {
    return formatToRaw(input);
  }
  if (format == 'JavaScript') {
    return formatToJavaScript(input);
  }
}

function formatToRaw(input) {
  return input.join(', ');
}

function formatToJavaScript(input) {
  return `[${input.map((element) => `'${element}'`).join(', ')}]`;
}
