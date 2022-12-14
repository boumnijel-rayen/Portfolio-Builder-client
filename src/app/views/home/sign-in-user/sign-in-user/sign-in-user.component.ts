import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataUserService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.css']
})
export class SignInUserComponent implements OnInit {

  res:any
  myForm : any
  authFailed : boolean = false;
  helper = new JwtHelperService();
  constructor(private formBuilder : FormBuilder, private authService : AuthService, private router : Router,private dataUser : DataUserService) { 
    this.myForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  connect(){
    this.authService.signIn(this.myForm.value).subscribe(
      (data:any) => {
        const decodedToken = this.helper.decodeToken(data.JWT);
        if (decodedToken.role != 2) {
          this.authFailed = true;
          return;
        }
        localStorage.setItem('token_User', data.JWT);
        localStorage.setItem('id_User', decodedToken.id);
        this.dataUser.getIdPortfolio(localStorage.getItem('token_User'),decodedToken.id).subscribe(data => {
          this.res = data
        }).add(()=>{
          if (this.res.portfolio == null){
            this.router.navigate(['/createPortfolio']);
          }else{
            this.router.navigate(['/user']);
          }
        })
        
      },
      (error:any) => {
        this.authFailed = true;
      }
    )
  }

}
