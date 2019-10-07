import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    const basicString = this.getHeaders();

    const headers = new HttpHeaders(
      { Authorization: basicString }
    );
    console.log('test call');
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees', { headers });
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>('http://localhost:8080/employees' + '/' + employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>('http://localhost:8080/employees', employee);
  }

  getHeaders() {
    const username = 'admin';
    const password = 'password';

    const basicString = 'Basic ' + window.btoa(username + ':' + password);
    return basicString;
  }

}
