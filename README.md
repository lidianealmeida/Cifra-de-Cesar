# Cifra de César

## Objetivo:

O objetivo do projeto é criar uma aplicação web usando os conhecimentos de User Experience Design e vanilla JavaScript, não sendo permitido o uso de biblioteca ou framework.

O programa deve criptografar e descriptografar textos usando a Cifra de César.

A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

Ele funciona basicamente assim: coletamos a mensagem que foi inserida, e depois deslocamos as letras conforme o número que o usuário digitar. Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

### Produto:

Site que permite Cifrar e decifrar mensagens utilizando a Cifra de César com uso intuitivo e layout similar a tradutores de idiomas.


Estrutura de pastas e arquivos:

```
├── .gitignore
├── README.md
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── tests.js
│   ├── style.css
|   └── images
```

### Parte Obrigatória:

* [x] Usar VanillaJS.
* [x] Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser
  cifrado.
* [x] Mostrar o resultado da cifra corretamente.
* [x] Permitir escolher o `offset` (_deslocamento_) a ser usado na
  cifragem/descifragem.
* [x] Implementa `cipher.encode`.
* [x] Implementa `cipher.decode`.
* [x] Criar testes unitários.