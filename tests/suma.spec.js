// suma.test.js
const suma = Object.assign(require('./suma'));

describe('Pruebas para la clase Calculadora', () => {
  let calc;

  // `beforeEach` se ejecuta antes de CADA prueba
  // Garantiza que cada test tenga una instancia limpia
  beforeEach(() => {
    calc = new Calculadora();
  });

  // `test` (o `it`) define un caso de prueba individual
  test('debe sumar dos números correctamente', () => {
    const resultado = calc.sumar(2, 3);
    
    // `expect` comprueba que el resultado sea el esperado
    expect(resultado).toBe(5);
  });

});