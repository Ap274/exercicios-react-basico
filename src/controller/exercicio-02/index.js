const vallados = (l1, l2, l3) => {
  const result = { triangulo: '' };
  if (l1 === l2 && l1 === l3) {
    result.triangulo = 'Equilátero';
    return result;
  }
  if (l1 === l2 || l1 === l3 || l2 === l3) {
    result.triangulo = 'Isósceles';
    return result;
  }
  result.triangulo = 'Escaleno';
  return result;
};

export default vallados;
