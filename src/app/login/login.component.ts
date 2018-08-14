import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationServcie} from '../services/authentication-servcie';
import {variable} from '@angular/compiler/src/output/output_ast';
import {AuthenVar} from '../Model/AuthenVar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mode:number = 0 ;
  constructor(private router : Router, private authService : AuthenticationServcie, public auth : AuthenVar) { }

  ngOnInit() {
  }

  onLogin(user){

    this.authService.login(user)
      .subscribe(resp=>{
          let jwt = resp.headers.get('Authorization') ;
          // vérifier si on récupère le JWT
          console.log(jwt);
          this.authService.saveToken(jwt) ;
          this.auth.authent1 = 0 ;
          this.auth.authent2 = 1  ;
          this.router.navigateByUrl('/snapshot') ;
        },
        err=>{
          this.mode = 1 ;
        })
  }


}
