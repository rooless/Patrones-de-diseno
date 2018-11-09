let myModule = (() => {
    let total = 0;

    // Metodos privados
    _privateFunction = () => total * 500;

    // Metodos publicos
    suma = (valor_a, valor_b) => {
        let suma = valor_a + valor_b;
        total += suma;
        console.log(`Resultado de la suma es = ${suma}`);
    };

    getPrivateFunction = () => 
        console.log(`Valor de _privateFunction es = ${_privateFunction()}`);
        return {
            getPrivateFunction : getPrivateFunction,
            suma : suma
        };
})();

myModule.suma(10,5);
myModule.getPrivateFunction();
myModule._privateFunction();