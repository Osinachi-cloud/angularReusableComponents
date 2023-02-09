import { Component } from '@angular/core';
import { 
	ReactiveFormsModule,
    FormsModule,
    FormGroup,
    FormControl,
    Validators} from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {


  title = 'angular7-reactive-postMethod';
  public myform: FormGroup;	  
    constructor( private auth: AuthService) {
    	this.myform = new FormGroup({
         uName: new FormControl(	'',	[Validators.required]),
         password: new FormControl(  '',  [Validators.required]),
         eMail: new FormControl(  '',  [Validators.required, Validators.pattern('^.+@.+\..+$')]),
         cOption: new FormControl('',   [Validators.required]),
         optionsRadios : new FormControl('',   [Validators.required]),
         optionChecked : new FormControl('',   [Validators.required]),
         address: new FormControl('', 	[Validators.required]),
         dBirth : new FormControl('',   [Validators.required])
      });  
  	}

  	 get formData() { return this.myform.controls; };
  
 validateForm() { 

for(let i in this.myform.controls)
    this.myform.controls[i].markAsTouched();

}

onSubmit (data: any): void  {
	console.log(data);    
    if (this.myform.valid) {
    this.auth.saveUser(data);
	}
	else{this.validateForm()}
  }

}
