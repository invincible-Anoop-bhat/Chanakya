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
  showCustomerInfo = false
  showOrderInfo = false
  showOrderEdit = false
  showOrderDelete = false
  OrderToDelete : number
  customerModalInput  = 0
  orderModalInput = 0


  updateScreen(){
    this.apiService.getAllOrders().subscribe((data: Order[]) => {
      this.AllOrders = data;
      console.log(data);
    });
    this.showCustomerInfo = false
    this.showOrderInfo = false
    this.showOrderEdit = false
    this.showOrderDelete = false
    this.viewOrderComp = false
  }
  // showTable: boolean = true;
  viewOrderComp: boolean = false;

  AlldummyOrders: Orderdummy[] = [
    new Orderdummy(1,2,600),
    new Orderdummy(2,3,850),
    new Orderdummy(2,3,1500)
  ];

  viewOrderInfopage(Oid: number){
    this.showOrderInfo = true
    this.orderModalInput = Oid
  }

  viewOrderEditpage(Oid: number){
    this.showOrderEdit = true
    this.orderModalInput = Oid
  }

  confirmOrderDelete(Oid: number){
    this.showOrderDelete = true;
    this.OrderToDelete = Oid;
  }
  deleteOrder(confirmed: boolean){
    if(confirmed){
      this.apiService.deleteOrder(this.OrderToDelete).subscribe((data: string) => {
        console.log(data);
        this.updateScreen();
      })
    }else{
      this.updateScreen();
    }
  }

  viewCustomerDetails(cid: number){
    this.showCustomerInfo = true
    this.customerModalInput = cid
  }

  showMessage(value : any){
    this.showCustomerInfo = value
    this.showOrderInfo = value
    this.showOrderEdit = value
    this.viewOrderComp = value
    this.updateScreen();
  }
}
