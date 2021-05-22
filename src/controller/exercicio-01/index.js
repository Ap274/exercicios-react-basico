const sum = (a, b) => {
  const result = {
    soma: a + b,
    subtracao: a - b,
    multiplicacao: a * b,
    divisao: a / b,
  };
  return result;
};

export default sum;
