import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/util/customers';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})

export class OrderEditComponent implements OnInit {
  
  // on: boolean = true ;
  @Input() customerId: number = 0;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder,private apiService: ApiService) { }
  //with the help of customer Id make a api call to fetch customer data and show it.
  customer : Customer
  customerForm !: FormGroup
  finishLoading: boolean = false

  ngOnInit(): void {

    this.customerForm = this.fb.group({
      Name: ['', [Validators.required,Validators.minLength(5),Validators.pattern('^[A-Za-z ]*')]],
      Id: ['',[Validators.required,Validators.pattern('^[0-9]*')]],
      Contact: ['',[Validators.required,Validators.pattern('^[0-9]*'),Validators.minLength(10)]],
      Address: ['',Validators.required],
      Area: ['',Validators.required],
      AltContact: ['',Validators.pattern('^[0-9]*')],
      Location: ['',Validators.required],
      BusinessType: ['',Validators.required],
      OtherDetails: [''],
    });

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
  onFormSubmit( form : FormGroup){
    console.log(form.value);
    // Call the update api of backend to edit the database
    console.log(this.customer);
    this.apiService.updateCustomer(this.customer).subscribe((data: any) => {
      console.log(data);
      alert("Customer details successfully updated")
      this.toggled.emit(false);
    });
  }

}
