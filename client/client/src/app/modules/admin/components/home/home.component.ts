import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public data: any[] = [];
  public searchText: string;
  public isUpdate = false;
  public itemId: string;

  regForm: FormGroup;

  constructor(private http: HttpClient, private route: Router) {
    this.itemId = ''
    this.regForm = new FormGroup({
      productname: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      brand: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      quantity: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      countInStock: new FormControl(null, Validators.required),
      rating: new FormControl(null, Validators.required),
      
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

  onUpdate(productDetails = { productName: String, description: String, price: String, brand: String, image: String, category: String, countInStock: String, rating: String }): void {
    console.log(this.itemId)
    this.http.put(`http://localhost:5100/products/${this.itemId}`, productDetails).subscribe((res) => {
      if (res) {
        window.alert("Product Updated Successfully!")
        this.http.get<any[]>('http://localhost:5100/products').subscribe(data => {
          this.data = data;
          this.isUpdate = false
        });
      }
    })
  }


  onEdit(productId: string) {
    this.isUpdate = true
    this.itemId = productId
  }

  onDelete(productId: string): void {
    this.http.delete(`http://localhost:5100/products/${productId}`).subscribe((res) => {
      if (res) {
        window.alert("Product Deleted Successfully!")
        this.http.get<any[]>('http://localhost:5100/products').subscribe(data => {
          this.data = data;
        });
      }
    })
  }
}
