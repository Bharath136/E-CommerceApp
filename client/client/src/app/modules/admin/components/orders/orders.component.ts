import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public data: any[] = [];



  constructor(private http: HttpClient, private route: Router) {
    this.http.get<any[]>('http://localhost:5100/orders').subscribe(data => {
      this.data = data;
    });
  }
}
