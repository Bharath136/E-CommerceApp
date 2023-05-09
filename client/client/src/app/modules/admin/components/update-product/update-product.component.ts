import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  
  constructor(private route:Router){
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (!jwtToken){
      window.alert("You can't Access this!")
      this.route.navigate(['/login'])
    }
  }
}
