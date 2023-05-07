import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  regForm: FormGroup;

  constructor(private http: HttpClient, private route:Router) {
    this.regForm  = new FormGroup({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
    })
   }

  onSubmit(details={email:String,password:String}): void {
    this.http.post('http://localhost:5100/login',details).subscribe((response) => {
      window.alert("Login Successfully!")
      this.route.navigate(['/home'])
    })
  }

}
