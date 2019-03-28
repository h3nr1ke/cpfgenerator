# CPF generator and validator

Generate and validate CPF ( Brazilian tax document )

## How to use

import the item

    var ClassCPF = require('cpfgenerator');
 
create a new var from the imported class

    var cpf = new ClassCPF();

generate a new CPF

    var newCPF = cpf.generate();

validate a given CPF (String)

    var isValidCPF = cpf.validate("12345678901");

mask a given CPF (String)

    var isValidCPF = cpf.mask("12345678901"); // 123.456.789-01

unmask a given CPF (String)

    var isValidCPF = cpf.unmask("123.456.789-01"); // 12345678901


Simple like that =)