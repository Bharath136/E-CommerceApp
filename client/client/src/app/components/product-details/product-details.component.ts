import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      this.http.get(`http://localhost:5100/products/${productId}`).subscribe(product => {
        this.product = product;
      });
    });
  }

  onAddToCart(productId:string):void {
    this.http.post('http://localhost:5100/add-to-cart',{"productId":productId}).subscribe((res) => {
      if(res){
        window.alert("Product Added to cart!")
      }
    })
  }
}
