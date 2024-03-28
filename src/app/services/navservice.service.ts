import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavserviceService {
  constructor(private httpClient: HttpClient) { }

  fetchFromEcho() {
    let url: string = "https://localhost:7061/api/Billings/ByYear/2023";
    let options = {
      headers: new HttpHeaders({
       'Access-Control-Allow-Origin': '*',
      })
    }


    return this.httpClient.get(url, options)
  }
}
