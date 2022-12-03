import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.css']
})
export class SignInUserComponent implements OnInit {

  myForm : any
  constructor(private formBuilder : FormBuilder) { 
    this.myForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  connect(){
    console.log(this.myForm.value)
  }

}
