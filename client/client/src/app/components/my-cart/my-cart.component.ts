import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent {
  public cartList: any[] = [];
  public searchText: string;

  constructor(private http: HttpClient) {
    this.searchText = '';
    this.http.get<any[]>('http://localhost:5100/cart').subscribe(data => {
      this.cartList = data;
      console.log(this.cartList); // logging data here to show it's available in the component
    });
  }

  onRemove(id: string): void {
    this.http.delete(`http://localhost:5100/cart/${id}`).subscribe(() => {
      console.log('Item removed from cart.');
    });
  }

}
