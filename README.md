# CPF generator and validator

Generate and validate CPF ( Brazilian tax document )

## How to use

import the itens

    var ClassCPF = require('cpfgenerator');
 
create a new var from the imported class

    var cpf = new ClassCPF();

generate a new CPF

    var newCPF = cpf.generate();

validate a given CPF

    var isValidCPF = cpf.validate("12345678901");

Simple like that =)