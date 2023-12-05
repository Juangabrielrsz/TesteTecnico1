function somatorio(numero) {
  let valor = 0;
  for (let i = 0; i < numero; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      valor += i;
    }
  }
  return valor;
}
console.log(somatorio(10));
console.log(somatorio(11));
