let myModule = (() => {
    let total = 0;

    // Metodos privados
    _privateFunction = () => total * 500;

    // Metodos publicos
    return {
        getPrivateFunction : () => 
            console.log(`Valor de _privateFunction es = ${_privateFunction()}`),
        suma : (valor_a, valor_b) => {
            let suma = valor_a + valor_b;
            total += suma;
            console.log(`Resultado de la suma es = ${suma}`);
        }
    };
})();

myModule.suma(10,5);
myModule.getPrivateFunction();
myModule._privateFunction();