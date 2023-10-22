import { Component, OnInit } from '@angular/core';
import { Order, Orderdummy } from '../util/orders';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  ngOnInit() {//error handle missing
    this.updateScreen();
  }
  AllOrders : Order[]
  updateScreen(){
    this.apiService.getAllOrders().subscribe((data: Order[]) => {
      this.AllOrders = data;
      console.log(data);
    });
  }
  // showTable: boolean = true;
  viewOrderComp: boolean = false;

  AlldummyOrders: Orderdummy[] = [
    new Orderdummy( 1, 2,600),
    new Orderdummy(2,3,850),
    new Orderdummy(2,3,1500)

  ];
  showCustomerInfo = false
  showOrderInfo = false
  customerModalInput  = 0
  orderModalInput = 0

  viewOrderInfopage(Oid: number){
    this.showOrderInfo = true
    this.orderModalInput = Oid
  }

  viewOrderEditpage(Oid: Number){}

  deleteOrder(Oid: Number){}

  viewCustomerDetails(cid: number){
    this.showCustomerInfo = true
    this.customerModalInput = cid
  }
  showMessage(value : any){
    this.showCustomerInfo = value
    this.showOrderInfo = value
    this.updateScreen()
  }
}
