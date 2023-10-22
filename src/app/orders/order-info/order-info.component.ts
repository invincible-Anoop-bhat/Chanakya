import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/util/customers';
import { Order } from 'src/app/util/orders';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css']
})
export class OrderInfoComponent implements OnInit {
  
  // on: boolean = true ;
  @Input() orderId: number = 0;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor(private apiService: ApiService) { }
  //with the help of customer Id make a api call to fetch customer data and show it.
  order : Order
  customer : Customer
  finishLoading: boolean = false

  ngOnInit(): void {
    this.apiService.getOrderById(this.orderId).subscribe((data: Order) => {
      this.order = data;
      console.log(data);
      this.finishLoading=true;
    });
  }
  onClick(){
    // this.on = !this.on;
    // this.toggled.emit(this.on);
    this.toggled.emit(false);
  }

}
