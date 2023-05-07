import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public data: any[] = [];
  public searchText: string;

  constructor(private http: HttpClient) {
    this.searchText = '';
    this.http.get<any[]>('http://localhost:5100/products').subscribe(data => {
      this.data = data;
      console.log(this.data); // logging data here to show it's available in the component
    });
  }

  filterData() {
    if (this.searchText) {
      return this.data.filter((product) =>
        product.productname.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      return this.data;
    }
  }

  onAddToCart() {
    window.alert("Product Added to cart!")
  }
}
