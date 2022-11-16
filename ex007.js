function calculaTotalLeds(altura, largura) {
  console.log(altura);
  console.log(largura);
  //Tem 15 leds
  //Altura: 2 quadrados
  //Comprimento: 4 quadrados
  if (altura * largura == 0) return 0;
  else if (altura * largura == 1) return 4;
  else if (altura * largura == 2) return 9;
  else if (altura * largura == 3) return 16;
  else return (altura + 1) * (largura + 1);
}
