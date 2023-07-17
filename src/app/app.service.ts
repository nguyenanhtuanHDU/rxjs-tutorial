import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  api: string = 'https://dog.ceo/api/breeds/image/random';
  constructor(private readonly http: HttpClient) {}
  getSingleDog() {
    return this.http.get(this.api);
  }
}
