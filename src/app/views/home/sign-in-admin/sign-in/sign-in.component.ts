import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  myForm : any
  authFailed : boolean = false;
  helper = new JwtHelperService();
  constructor(private formBuilder : FormBuilder, private authService : AuthService, private router : Router) { 
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
        if (decodedToken.role != 1) {
          this.authFailed = true;
          return;
        }
        localStorage.setItem('token_Admin', data.JWT);
        localStorage.setItem('id_Admin', decodedToken.id);
        this.router.navigate(['/admin']);
      },
      (error:any) => {
        this.authFailed = true;
      }
    )
  }

}
