export class Producto {
    _id?: number;
    codigo: number;
    nombre: string;
    categoria: string;
    imagen: string;
    precio: number;
    stock: number;

    constructor(codigo: number, nombre: string, categoria: string, imagen: string, precio: number, stock: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.categoria = categoria;
        this.imagen = imagen;
        this.precio = precio;
        this.stock = stock;
    }
}
