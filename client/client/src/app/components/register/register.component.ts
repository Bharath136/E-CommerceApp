import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm: FormGroup;

  constructor(private http:HttpClient, private route:Router) {
    this.regForm  = new FormGroup({
      firstname:new FormControl(null,Validators.required),
      lastname:new FormControl(null,Validators.required),
      username:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    })
   }

   onSubmit(details={firstname:String,lastname:String,username:String, email:String,password:String}): void {
    this.http.post('http://localhost:5100/register',details).subscribe((response) => {
      window.alert("Register Successfully!")
      this.route.navigate(['/login'])
    })
  }
}
