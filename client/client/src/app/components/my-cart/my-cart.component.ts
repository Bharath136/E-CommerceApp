import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {
  public cartList: any[] = [];

  constructor(private http: HttpClient,private route:Router) {
    this.http.get<any[]>('http://localhost:5100/cart').subscribe(data => {
      this.cartList = data;
    });
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (jwtToken){
      this.route.navigate(['/admin/home'])
    }
    const token = localStorage.getItem("jwtToken")
    if (!token) {
      window.alert("You can't Access this!")
      this.route.navigate(['/login'])
    }
    
  }

  onRemove(id: string): void {
    console.log(id)
    this.http.delete(`http://localhost:5100/remove-from-cart/${id}`).subscribe((res) => {
      window.alert('Item removed from cart.')
      this.http.get<any[]>('http://localhost:5100/cart').subscribe(data => {
      this.cartList = data; 
    });
    });
    
  }
  

}
