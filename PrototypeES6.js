class Persona
{
    constructor(apellido, nombre)
    {
        this.apellido = apellido;
        this.nombre = nombre;
    }

    getApellido()
    {
        console.log(`Mi apellido es ${this.apellido}`);
    }

    getNombre()
    {
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

let person = new Persona("Siniakova", "Helena");

person.getNombre();
person.getApellido();


class SuperHero extends Persona
{
    constructor(apellido, nombre, powers)
    {
        super(apellido, nombre);
        this.powers = powers;
    }

    getSuperHero()
    {
        this.getNombre();
        this.getApellido();

        console.log(`Yo soy ${this.powers}`);
    }
}

let heroe = new SuperHero("Helena", "Siniakova", "un poco Programar :)");

heroe.getSuperHero();