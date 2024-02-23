import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
  getUsers() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          return of([]); //  in case of error
        })
      );
  }
}
