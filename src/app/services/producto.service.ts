import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/producto';

  constructor(private http: HttpClient) { }

  getProductos(): Observable <any> {
    return this.http.get(this.url);
  }
  postProductos(producto: Producto): Observable <any> {
    return this.http.post(this.url, producto);
  }
  getProducto(_id: string): Observable <any>{
    return this.http.get(this.url + '/' + _id);
  }
  editarProducto(_id: string, producto: Producto): Observable <any>{
    return this.http.put(this.url + '/' + _id, producto);
  }
}
