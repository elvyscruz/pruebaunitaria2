// hola_mundo.test.js

const holaMundo = require('./index');

test('Comprobación del mensaje de saludo', () => {
  expect(holaMundo()).toBe('¡Hola, mundo!');
});
