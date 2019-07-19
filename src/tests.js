function cifrarteste(calculado, esperado){
  if (calculado === esperado) {
    console.log("Correto");
    return true;
  } else {
    console.log("A resposta foi:" + calculado + "E contrário de:" + esperado);
    return false;
  }
}

console.log("Testando a função cifrar:")
cifrarteste(cypherCifrar("abc", 1), "bcd")
cifrarteste(cypherCifrar("xyz", 2), "zab")
cifrarteste(cypherCifrar("apto 67", 2), "apto 2")
cifrarteste(cypherCifrar("AEIOU", 5), "ABCDE")


function decifrarteste(calculado, esperado){
  if (calculado === esperado) {
    console.log("Correto");
    return true;
  } else {
    console.log("A resposta foi:" + calculado + "E contrário de:" + esperado);
    return false;
  }
}

console.log("Testando a função decifrar:")
decifrarteste(cypherDec("bcd", 1), "abc")
decifrarteste(cypherDec("#erp gld!#", 3), "#bom dia!#")
decifrarteste(cypherDec("CBOBOB", 1), "BANANA")
