import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  url = 'http://localhost:4000/api/marca';

  constructor(private http: HttpClient) { }

  getMarcas(): Observable <any> {
    return this.http.get(this.url);
  }
  postMarcas(marca: Marca): Observable <any> {
    return this.http.post(this.url, marca);
  }
  getMarca(_id: string): Observable <any>{
    return this.http.get(this.url + '/' + _id);
  }
  editarMarca(_id: string, marca: Marca): Observable <any>{
    return this.http.put(this.url + '/' + _id, marca);
  }

}
