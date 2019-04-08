# CPF generator and validator / Gerador e validador de CPF

Generate and validate CPF ( Brazilian tax document )

## Installation / Instalação

    npm i cpfgenerator

## How to use / Como utilizar

import the item / importar o item

    var ClassCPF = require('cpfgenerator');
 
create a new var from the imported class / criar uma nova var para a classe importada

    var cpf = new ClassCPF();

generate a new CPF / gera um novo CPF

    var newCPF = cpf.generate();

validate a given CPF (String) / valida um CPF (String)

    var isValidCPF = cpf.validate("12345678901");

mask a given CPF (String) / aplica a máscara no CPF (String)

    var maskedCPF = cpf.mask("12345678901"); // 123.456.789-01

unmask a given CPF (String) / remove a máscara do CPF (String)

    var unmaskedCPF = cpf.unmask("123.456.789-01"); // 12345678901


Simple like that =) / Simple assim =)

## Donate

If you think this module was useful to you, consider donating / Se você achou este plugin útil, considere fazer um doação

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=h3nr1ke%40gmail.com&currency_code=USD&source=url)
