import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isUser = false 
  public isAdmin = false

  constructor(){
    const token = localStorage.getItem('jwtToken')
    if(token){
      this.isUser
    }
  }
}
