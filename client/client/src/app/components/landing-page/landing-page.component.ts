import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  public data: any[] = [];
  public searchText: string;
  public itemId: string;
  public product: any = {};

  regForm: FormGroup;

  constructor(private http: HttpClient, private route: Router) {
    this.itemId = ''
    this.product = {}
    this.regForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      paymentMethod: new FormControl(null,Validators.required)
    })
    this.searchText = '';
    this.http.get<any[]>('http://localhost:5100/products').subscribe(data => {
      this.data = data;
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

  onAddToCart(productId:string):void {
    this.http.post('http://localhost:5100/add-to-cart',{"productId":productId}).subscribe((res) => {
      if(res){
        window.alert("Product Added to cart!")
        console.log(res)
      }
    })
  }

  onBuyNow(orderDetails = { user: String, phone: String, productId: this.itemId, address1: String, address2: String}): void {
    console.log(this.itemId);
    const order = {
      user: orderDetails.user,
      phone: orderDetails.phone,
      productId: this.itemId,
      address1: orderDetails.address1,
      address2: orderDetails.address2
    };
    this.http.post(`http://localhost:5100/order`, order).subscribe((res) => {
      if (res) {
        window.alert("Product Placed Successfully!");
        this.http.get<any[]>('http://localhost:5100/products').subscribe(data => {
          this.data = data;
        });
      }
    });
  }
}
