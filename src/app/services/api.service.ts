import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../util/customers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders;

  baseUrl = 'http://localhost:8080';

  getAllCustomers(): Observable<any> {
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.set('Authorization', 'Basic YW5vb3A6YTIxZ1RhNDY='); 

    return this.http.get<any>(`${this.baseUrl}/getAllCustomers`,{ headers: new HttpHeaders({'Authorization': 'Basic YW5vb3A6YTIxZ1RhNDY='})});
  }


  getCustomerById(id: number): Observable<any> {

    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.set('Authorization', 'Basic YW5vb3A6YTIxZ1RhNDY=');

    return this.http.get<any>(`${this.baseUrl}/getCustomer/${id}`,{
      headers: this.headers
    });
  }


  addNewCustomer(data: Customer): Observable<any> {

    this.headers.set('Content-Type', 'application/json; charset=utf-8');
    this.headers.set('Authorization', 'Basic YW5vb3A6YTIxZ1RhNDY=');

    return this.http.post<any>(`${this.baseUrl}/addCustomer`, data,{
      headers: this.headers
    });
  }

}
