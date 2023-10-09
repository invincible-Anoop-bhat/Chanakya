import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../util/customers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  baseUrl = 'http://localhost:8080';

  getAllCustomers(): Observable<any> {
    
    // let headers = new HttpHeaders();
    // headers = headers.append('Authorization','Basic YW5vb3A6YTIxZ1RhNDY=');
    return this.http.get<any>(`${this.baseUrl}/getAllCustomers`);//,{ headers: headers});
  }


  getCustomerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getCustomer/${id}`)
  }


  addNewCustomer(data: Customer): Observable<any> {

    return this.http.post<any>(`${this.baseUrl}/addCustomer`, data);
  }

  updateCustomer(data: Customer): Observable<any> {
    
    return this.http.put<any>(`${this.baseUrl}/updateCustomer`, data);
  }

}
