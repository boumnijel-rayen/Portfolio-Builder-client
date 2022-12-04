import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm : any;
  constructor(private formBuilder : FormBuilder) { 
    this.myForm = this.formBuilder.group({
      name : ['', Validators.required],
      phone : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      confirmPassword : ['', Validators.required]
    },{
      validators: [this.controlPassword('password'), this.controlPasswordConfirmation('password', 'confirmPassword')]
    });
  }

  private controlPassword(controlPassword : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const password = FormGroup.get(controlPassword)?.value;
      let test : boolean = true;
      var regExpLower = /[a-z]/g;
      var regExpUpper = /[A-Z]/g;
      var regExpNumber = /[0-9]/g;
      var regExpSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;

      if (!regExpLower.test(password)) {
        test = false;
      }
      if(!regExpUpper.test(password)){
        test = false;
      }
      if(!regExpNumber.test(password)){
        test = false;
      }
      if(!regExpSpecial.test(password)){
        test = false;
      }
      if((password.length < 8) || (password.length > 32)){
        test = false;
      }

      if(!test){
        return {
          passworControlNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  private controlPasswordConfirmation(controlPassword : string, controlConfirmation : string):ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const FormGroup = control as FormGroup;
      const password = FormGroup.get(controlPassword)?.value;
      const confirmation = FormGroup.get(controlConfirmation)?.value;
      
      if(password != confirmation){
        return {
          passworConfirmationControlNotValid: true
        }
      }else{
        return null;     
      }

    }
  }

  ngOnInit(): void {
  }

  add(){
    console.log(this.myForm.value);
  }

}
