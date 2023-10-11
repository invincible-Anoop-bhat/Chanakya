import { Component, OnInit,Output , EventEmitter } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Customer } from 'src/app/util/customers';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  constructor(private fb: FormBuilder, private apiService: ApiService) { }
  customerForm !: FormGroup
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
  }
  
  onClick(){
    // this.on = !this.on;
    // this.toggled.emit(this.on);
    this.toggled.emit(false);
  }
  newCustomer: Customer;
  onFormSubmit(form: FormGroup){
    if (form.valid) {
      this.newCustomer = {
        id: Number(form.value.Id),
        name: form.value.Name,
        contact: form.value.Contact,
        address: form.value.Address,
        altContact: form.value.Altcontact,
        businessType: form.value.BusinessType,
        area: form.value.Area,
        otherDetails: form.value.OtherDetails,
        location: form.value.Location,
      };
  
      this.apiService.addNewCustomer(this.newCustomer).subscribe((data: any) => {
        console.log(data);
        alert("Customer Created Successfully");
        this.toggled.emit(false);
      });
    }
    this.customerForm.reset();
    console.log(form.valid)
  }
  ClearFormData(){
    this.customerForm.reset(); 
  }

}
