import { Component, OnInit } from '@angular/core';
import { Customer } from '../util/customers';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(protected modalService: ModalService) { }
  
  ngOnInit(): void {
  }
  showCustomerInfo = false;
  customerInfoInput = "";
  allCustomers = [
    new Customer("Mars coffee"),
    new Customer("Raghavendra store"),
    new Customer("K.V. Enterprise"),
    new Customer("Nagesh")
  ]
  selectedCustomers = this.allCustomers;
  pages = [1,2];
  openmodal(s: string){
    this.modalService.open(s);
  }
  closemodal(){
    this.modalService.close();
  }
  viewCustomerInfopage(name: string){
    this.showCustomerInfo = !this.showCustomerInfo;
    this.customerInfoInput = name;
  }
  showMessage(value: any) {
    this.showCustomerInfo = value;
  }
  
}
