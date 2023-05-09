import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent {
  public data: any[] = [];
  public searchText: string;
  public routerId: string;
  public product: any = {};

  regForm: FormGroup;

  constructor(private http: HttpClient, private route: Router, private activatedRoute: ActivatedRoute) {
    
    const token = localStorage.getItem("jwtToken")
    if (!token) {
      window.alert("You can't Access this!")
      this.route.navigate(['/login'])
    }
    this.routerId = '';
    const idParam = this.activatedRoute.snapshot.paramMap.get('id');
    if (idParam) {
      this.routerId = idParam;
    }

    this.product = {}
    this.regForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      paymentMethod: new FormControl(null, Validators.required)
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


  onAddToCart(productId: string): void {
    this.http.post('http://localhost:5100/add-to-cart', { "productId": productId }).subscribe((res) => {
      if (res) {
        window.alert("Product Added to cart!")
      }
    })
  }

  createOrder(orderDetails = { user: String, phone: String, productId: this.routerId, address1: String, address2: String }): void {
    console.log(this.routerId);
    const order1 = {
      user: orderDetails.user,
      phone: orderDetails.phone,
      productId: this.routerId,
      address1: orderDetails.address1,
      address2: orderDetails.address2
    };
    const order = {
      "user": "Ravi",
      "phone": "9876543210",
      "products": [
        {
          "product": "60c8e2a184b31a282450f0cc",
          "quantity": 2
        },
        {
          "product": "60c8e2a184b31a282450f0cd",
          "quantity": 1
        }
      ],
      "address": "123 Main St"
    }
    this.http.post(`http://localhost:5100/orders`, order).subscribe((res) => {
      if (res) {
        window.alert("Product Placed Successfully!");
        this.http.get<any[]>('http://localhost:5100/products').subscribe(data => {
          this.data = data;
        });
      }
    });
  }
}
