import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { country } from '../interface/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl:string = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  buscarPais(termino:string): Observable<country[]> {
    const url= `${this.apiUrl}/name/${termino}`; 
    return this.http.get<country[]>(url);
  }

  buscarCapital(termino:string): Observable<country[]> {
    const url= `${this.apiUrl}/capital/${termino}`;
    return this.http.get<country[]>(url)
  }

  getPaisAlpha(id:string): Observable<country[]> {
    const url= `${this.apiUrl}/alpha/${id}`;
    return this.http.get<country[]>(url)
  }
  
}
