function Persona(apellido, nombre)
{
    this.apellido = apellido;
    this.nombre = nombre;
}

Persona.prototype.getApellido = function()
{
    console.log(`Mi apellido es ${this.apellido}`);
};

Persona.prototype.getNombre = function()
{
    console.log(`Mi nombre es ${this.nombre}`);
};

let person = new Persona("Siniakova", "Helena");

person.getNombre();
person.getApellido();

function SuperHero(apellido, nombre, powers)
{
    Persona.call(this, apellido, nombre);
    this.powers = powers;
}

SuperHero.prototype = Object.create(Persona.prototype);

SuperHero.prototype.getSuperHero = function()
{
    this.getNombre();
    this.getApellido();

    console.log(`Yo soy ${this.powers}`);
};

let heroe = new SuperHero("Helena", "Siniakova", "un poco programar :)");

heroe.getSuperHero();

String.prototype.cleanString = function() {
    var ascii = 0;
    var char = '';
    var request = '';
    var special = {'á' : 'a', 'é' : 'e',
                   'í' : 'i', 'ó' : 'o',
                   'ú' : 'u', 'ñ' : 'n'};
    var string = this.toLowerCase();

    for (var i in string)
    {
        char = string[i];
        char = (typeof special[char] !== "undefined") ? special[char] : char;
        if (typeof char !== "function")
        {
            ascii = char.charCodeAt();
            request += (ascii === 32 || (ascii >= 48 && ascii <= 57) || (ascii >= 97 && ascii <= 122)) ? char : "";
        }
    }

    request = request.split(" ");
    request = request.filter(Boolean);
    request = request.join("-");
    return request;
}

let cadena = "Héléná Siníakova".cleanString();
console.log(cadena);

