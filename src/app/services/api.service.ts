import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../util/customers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:8080';
  getAllCustomers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getAllCustomers`);
  }
  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getCustomer/${id}`);
  }
  addNewCustomer(data: Customer): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addCustomer`, data)
  }

}
