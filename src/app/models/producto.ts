export class Producto {
    _id?: number;
    codigo: string;
    nombre: string;
    categoria: string;
    imagen: string;
    precio: number;
    stock: number;
    marca: string;

    constructor(codigo: string, nombre: string, categoria: string, imagen: string, precio: number, stock: number, marca: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
        this.marca = marca;
    }
}
