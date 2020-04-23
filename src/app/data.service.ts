import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {
baseUrl = 'https://vor76f0raj.execute-api.ap-south-1.amazonaws.com/dev/';
// baseUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getFiles() {
    return this.http.get(
      this.baseUrl
      + 'listFiles'
    );
  }
}