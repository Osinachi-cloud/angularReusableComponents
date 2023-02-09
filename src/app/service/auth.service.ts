import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   url = "https://reqres.in/api/users";     


  constructor(private http: HttpClient ) {

   }

   saveUser(data:any){
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
      this.http.post(this.url, data).subscribe(res => console.log("Data Post Done"));
   }


}
