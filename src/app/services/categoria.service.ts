import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  url = 'http://localhost:4000/api/categoria';

  constructor(private http: HttpClient) { }

  getCategorias(): Observable <any> {
    return this.http.get(this.url);
  }
}
