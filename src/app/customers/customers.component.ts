import { Component, OnInit } from '@angular/core';
import { Customer, Customerdummy } from '../util/customers';
import { ModalService } from '../services/modal.service';
import { ApiService } from '../services/api.service'
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(protected modalService: ModalService, private apiService: ApiService) { }
  AllCustomers: Customer[];
  ngOnInit() {//error handle missing
    this.updateScreen();
  }
  updateScreen(){
    this.apiService.getAllCustomers().subscribe((data: Customer[]) => {
      this.AllCustomers = data;
      console.log(data);
    });
  }

  showCustomerInfo = false;
  showCreateCustomer = false;
  showEditCustomer = false;
  customerModalInput = 0;
  
  alldummyCustomers = [
    new Customerdummy("Mars coffee"),
    new Customerdummy("Raghavendra store"),
    new Customerdummy("K.V. Enterprise"),
    new Customerdummy("Nagesh")
  ]
  selectedCustomers = this.alldummyCustomers;
  pages = [1,2];
  openmodal(s: string){
    this.modalService.open(s);
  }
  closemodal(){
    this.modalService.close();
  }
  viewCustomerInfopage(name: number){
    this.showCustomerInfo = !this.showCustomerInfo;
    this.customerModalInput = name;
  }
  viewCustomerEditpage(name: number){
    this.showEditCustomer = !this.showEditCustomer;
    this.customerModalInput = name;
  }
  deleteCustomer(id: number){
    this.apiService.deleteCustomer(id).subscribe((data: string) => {
      console.log(data);
      this.updateScreen();
    });
  }
  showMessage(value: any) {
    this.showCustomerInfo = value;
    this.showCreateCustomer = value;
    this.showEditCustomer = value;
    this.updateScreen();
  }
  
}
