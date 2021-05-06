function Fatorial(ordem){
  if (ordem <= 0)
    return 0;

  let valor = 1;
  for(let i = 1; i <= ordem; i++)
    valor *= i;

  return valor;
}

function Triangulo(a, b, c){
  if(a <= 0 || b <= 0 || c <= 0)
    return "Nulo";

  if (a === b && a === c && b === c)
    return "Equilátero"
  else if ((a === b && a != c) || (a === c && a != b) || (b === c && b != a))
    return "Isósceles"
  else
    return "Escaleno"
}

function EhPrimo(valor){
  let Avalor = valor;
  let saida = false;

  for( ; Avalor > 0; Avalor--){
    if(valor % Avalor == 0 && valor != Avalor || valor === 1)
      continue;
    else if(Avalor == 2){
      saida = true;
      break;
    }
  }
  
  return saida;  
}

var NumerosPrimos = [];

function RetornaArray(valor){
  let saida = [];

  for(let i = 0; saida.length < valor; i++){
    if((i <= NumerosPrimos[NumerosPrimos.length - 1]) && NumerosPrimos.indexOf(i, 0) == -1) 
      continue;
    else if(NumerosPrimos.indexOf(i, 0) >= 0)
      saida.push(i);
    else if(EhPrimo(i)){
      saida.push(i);
      NumerosPrimos.push(i);
    }
  }

  return saida;
}