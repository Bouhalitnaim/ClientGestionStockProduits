import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API_URLS} from './config/api.url.config';
import {CookieService} from 'ngx-cookie-service';
import 'rxjs/add/operator/finally';
import 'rxjs-compat/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class AppService {

authenticated : boolean= false;

  constructor(private http:HttpClient,
              private cookieService:CookieService) { }


  // authenticate(credentials , callback){
  //   if(credentials && credentials.username == 'user' && credentials.password == 'password1'){
  //       this.authenticated = true;
  //       return callback && callback();
  //
  //     } else {
  //     this.authenticated= false;
  //   }
  //   return '';
  // }

  authenticate(credentials , callback){
    console.log('test');
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
        this.cookieService.set('token', token);
      this.http.get(API_URLS.USER_URL).
      subscribe(response =>{
        this.authenticated = !!(response && response['name']);
        return callback && callback();

      } );

    }
    else {this.authenticated= false;
    }
  }

  logout(callback){
    return callback && callback();
  }

}
