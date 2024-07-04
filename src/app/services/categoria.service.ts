import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://localhost:4000/api/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable <any> { //observable sirve para peticiones HTTP
    return this.http.get(this.url);
  }
  postCategorias(categoria: Categoria): Observable <any> {
    return this.http.post(this.url, categoria);
  }
  getCategoria(_id: string): Observable <any>{
    return this.http.get(this.url + '/' + _id);
  }
  editarCategoria(_id: string, categoria: Categoria): Observable <any>{
    return this.http.put(this.url + '/' + _id, categoria);
  }

}
