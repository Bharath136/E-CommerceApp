import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public data: any[] = [];
  public isLoading = false;

  constructor(private http: HttpClient, private route: Router) {
    this.isLoading = true;
    this.http.get<any[]>('http://localhost:5100/orders').subscribe(data => {
      this.data = data;
      this.isLoading = false;
    });
    const jwtToken = localStorage.getItem('adminJwtToken')
    if (!jwtToken){
      window.alert("You can't Access this!")
      this.route.navigate(['/login'])
    }
  }
}
