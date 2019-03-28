/**
 * Generate and validate CPF (Brazilian tax document)
 * @author  Henrique Deodato <h3nr1ke@gmail.com>
 * @see https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
 */
"use strict";

var ClassCPF = class CPF {

    /**
     * Generate a randon number between 0 and 9
     * @return {integer} A randon number
     */
    _createRandon (){
        let n = 9;
        return Math.round(Math.random()*n);
    }

    /**
     * Calculate the rest of the division (mod)
     * @param  {integer} dividendo number to be divided
     * @param  {integer} divisor   the divisor
     * @return {integer}           the mod of the calculation
     */
    _mod(dividendo,divisor) {
        return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
    }

    /**
     * Generate a new CPF
     * @return {string} the generated CPF
     */
    _generate(){
        let n1 = this._createRandon(),
        n2 = this._createRandon(),
        n3 = this._createRandon(),
        n4 = this._createRandon(),
        n5 = this._createRandon(),
        n6 = this._createRandon(),
        n7 = this._createRandon(),
        n8 = this._createRandon(),
        n9 = this._createRandon();

        let d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;

        d1 = 11 - ( this._mod(d1,11) );

        if (d1>=10) {
            d1 = 0;
        }

        let d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;

        d2 = 11 - (this._mod(d2,11));

        if (d2>=10){
            d2 = 0;
        }

        return ""+n1+n2+n3+n4+n5+n6+n7+n8+n9+d1+d2;
    }

    /**
     * Validate if the given CPF is valid or not
     * @param  {string} cpf value to be tested
     * @return {boolean}     true if valid, fals otherwise
     */
    _validate(cpf){
        let sum;
        let rest;
        sum = 0;
        if (cpf == "00000000000") return false;

        for (let i=1; i<=9; i++) {
        	sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
        }
        rest = (sum * 10) % 11;

        if ((rest == 10) || (rest == 11))  {
        	rest = 0;
        }
        if (rest != parseInt(cpf.substring(9, 10)) ) {
        	return false;
        }

        sum = 0;
        for (let i = 1; i <= 10; i++) {
        	sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
        }
        
        rest = (sum * 10) % 11;

        if ((rest == 10) || (rest == 11)) {
        	rest = 0;
        }
        if (rest != parseInt(cpf.substring(10, 11) ) ) {
        	return false;
        }
        return true;
    }

    // exposed method to generate a new CPF
    get generate(){
        return this._generate;
    }

    // exposed method to validate a given CPF
    validate(cpf){
        return this._validate(cpf);
    }

    // apply mask the mask AAA.AAA.AAA-AA to the given CPF
    mask(cpf){
        if( this._validate(cpf) ){
            return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1\.$2\.$3\-$4');
        }
        else{
            console.log(`${cpf} is not a valid CPF, mask not applied`);
            return cpf;
        }
    }

    // remove everything that is not a number
    unmask(cpf){
        if( typeof cpf == "string" ){
            return cpf.replace(/[^0-9]/g,"");
        }
        else{
            console.log(`${cpf} is not valid to be unmasked, please provide a string following the format AAA.AAA.AAA-AA `);
            return cpf;
        }
    }
};

module.exports = ClassCPF;