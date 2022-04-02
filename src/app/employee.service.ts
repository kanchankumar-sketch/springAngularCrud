import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseurl="http://localhost:8081";
  constructor(private httpclient:HttpClient) { }
getEmployeelist():Observable<Employee[]>{
  return this.httpclient.get<Employee[]>(`${this.baseurl}`);
}
createEmployee(employee:Employee):Observable<Object>{
  return this.httpclient.post(`${this.baseurl}`,employee);
}
getEmployeeById(id:number):Observable<any>
{
  return this.httpclient.get(`${this.baseurl}/${id}`);
}
updateEmployee(id:number,employee:Employee):Observable<Object>{
  return this.httpclient.put(`${this.baseurl}/${id}`,employee);
}
deleteEmployee(id:number):Observable<Object>{
  return this.httpclient.delete(`${this.baseurl}/${id}`);
}
}
