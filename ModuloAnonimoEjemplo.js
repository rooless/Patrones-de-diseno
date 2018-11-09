let myModule = (() => {
    let publicFunction = {};
    let total = 0;

    // Metodos privados
    privateFunction = () => total * 500;

    // Metodos publicos
    publicFunction.suma = (valor_a, valor_b) => {
        let suma = valor_a + valor_b;
        total += suma;
        console.log(`Resultado de la suma es = ${suma}`);
    };

    publicFunction.getPrivateFunction = () => 
        console.log(`Valor de privateFunction es = ${privateFunction()}`);
    return publicFunction;
})();

myModule.suma(10,5);
myModule.getPrivateFunction();
myModule.privateFunction();