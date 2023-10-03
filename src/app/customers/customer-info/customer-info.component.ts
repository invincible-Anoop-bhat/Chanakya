import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/util/customers';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  
  // on: boolean = true ;
  @Input() customerId: number = 0;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor(private apiService: ApiService) { }
  //with the help of customer Id make a api call to fetch customer data and show it.
  customer : Customer
  finishLoading: boolean = false

  ngOnInit(): void {
    this.apiService.getCustomerById(this.customerId).subscribe((data: Customer) => {
      this.customer = data;
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
