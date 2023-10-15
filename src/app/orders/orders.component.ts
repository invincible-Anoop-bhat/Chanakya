import { Component, OnInit } from '@angular/core';
import { Order } from '../util/orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showTable: boolean = true;
  viewOrderComp: boolean = false;

  AllOrders: Order[] = [
    new Order( 1, 2,600),
    new Order(2,3,850),
    new Order(2,3,1500)

  ];

  viewOrderInfopage(Oid: Number){}

  viewOrderEditpage(Oid: Number){}

  deleteOrder(Oid: Number){}

  viewCustomerDetailes(cid:Number){}
}
