/*
    MODELO = Plantilla que representa a un tipo de OBJETO, compartiendo 
    características generales y similares

    INSTANCIAS = Copia de la CLASE o MODELO del objeto, que tenía definido 
    sus propias características

    Ej.: Persona -> trabajador, estudiante, veterinario
    Ej.: Animal -> perro, gato, caballo

    INTERFACES (concepto del lenguaje TypeScript) = 
    MODELO/ CLASE (concepto de Programación Orientada a Objetos)
*/

export interface Card {
    idCard: string; // alfanumérico, numérico, booleano
    titulo: string;
    descripcion: string;
    imagen: string;
    alt: string;
}
