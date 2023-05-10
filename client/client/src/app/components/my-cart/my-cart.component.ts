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
  public isLoading = false

  constructor(private http: HttpClient, private route: Router) {
    this.isLoading = true
    this.http.get<any[]>('http://localhost:5100/cart').subscribe(data => {
      this.cartList = data;
      this.isLoading = false
    });
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (jwtToken) {
      this.route.navigate(['/admin/home'])
    }
    const token = localStorage.getItem("jwtToken")
    if (!token) {
      window.alert("You can't Access this! because your not logedin user!")
      this.route.navigate(['/login'])
    }
  }

  onRemove(id: string): void {
    this.isLoading = true
    console.log(id)
    this.http.delete(`http://localhost:5100/remove-from-cart/${id}`).subscribe((res) => {
      window.alert('Item removed from cart.')
      this.http.get<any[]>('http://localhost:5100/cart').subscribe(data => {
        this.cartList = data;
        this.isLoading = false
      });
    });

  }


}
