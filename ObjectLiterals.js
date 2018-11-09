let MyObjectLiteral = {
    suma    : (valor_a, valor_b)=>{
        let result = valor_a + valor_b;
        console.log(`El resultado de la suma de ${valor_a} + ${valor_b} = ${result}`);
    },

    resta   : (valor_a, valor_b)=>{
        let result = valor_a - valor_b;
        console.log(`El resultado de la resta de ${valor_a} - ${valor_b} = ${result}`);
    }
};

MyObjectLiteral.suma(5,10);
MyObjectLiteral.resta(15,10);