import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private http: HttpClient,
    private router:Router
  ) { 
    const token = localStorage.getItem("jwtToken")
    if (!token) {
      this.router.navigate(['/login'])
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      this.http.get(`http://localhost:5100/products/${productId}`).subscribe(product => {
        this.product = product;
      });
    });
  }

  onAddToCart(productId: string): void {
    console.log(productId);
    this.http.post('http://localhost:5100/add-to-cart', {productId}).subscribe(
      (response) => {
        console.log(response);
        window.alert('Product added to cart!');
      },
      (error) => {
        console.error(error);
        window.alert('Error occurred while adding the product to cart!');
      }
    );
  }
}
