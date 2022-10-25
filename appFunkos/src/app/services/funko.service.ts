import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CatFunko } from '../models/funko.model';

@Injectable({
  providedIn: 'root'
})
export class FunkoService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCat(): Observable<CatFunko[]>{
    return this.http.get<CatFunko[]>(`${this.url}categorias`)
  }

  saveCat(tipoFunko: CatFunko): Observable<any>{
    return this.http.post(`${this.url}categorias`,tipoFunko);//Se pone la liga hacia dónde nos va a mandar el navegador
  }

  getByIdCat(id:number):Observable<CatFunko>{
    return this.http.get<CatFunko>(`${this.url}categorias/${id}`); // Trae el registro a editar
  }

  updateCat(id: number, tipoFunko: CatFunko){
    return this.http.put(`${this.url}categorias/${id}`,tipoFunko); // Guarda el registro editado
  }

  deleteCat(id: number){
    return this.http.delete(`${this.url}categorias/${id}`); // Elimina un registro
  }

}
