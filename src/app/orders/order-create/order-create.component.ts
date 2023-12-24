import { Component, OnInit,Output , EventEmitter } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Order } from 'src/app/util/orders';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  constructor(private fb: FormBuilder, private apiService: ApiService) { }
  orderForm !: FormGroup
  ngOnInit(): void {
    this.orderForm = this.fb.group({
      Id: ['',[Validators.required,Validators.pattern('^[0-9]*')]],
      Custid: ['',[Validators.required,Validators.pattern('^[0-9]*')]],
      OrderDate: ['',Validators.required],
      OrderDetails: ['',Validators.required],
      DeliveryDate: ['',Validators.required],
      PaymentDate: [''],
      PaymentType: [''],
      Completed: ['',Validators.required],
    });
  }
  
  onClick(){
    // this.on = !this.on;
    // this.toggled.emit(this.on);
    this.toggled.emit(false);
  }
  newOrder: Order;
  onFormSubmit(form: FormGroup){
    if (form.valid) {
      this.newOrder = {
        Id: Number(form.value.Id),
        Custid: Number(form.value.Custid),
        OrderDate: form.value.OrderDate,
        OrderDetails: form.value.OrderDetails,
        DeliveryDate: form.value.DeliveryDate,
        PaymentDate: form.value.PaymentDate,
        PaymentType: form.value.PaymentType,
        Completed: form.value.Completed,
      };
  
      this.apiService.addNewOrder(this.newOrder).subscribe((data: any) => {
        console.log(data);
        alert("Order Created Successfully");
        this.toggled.emit(false);
      });
    }
    this.orderForm.reset();
    console.log(form.valid)
  }
  ClearFormData(){
    this.orderForm.reset(); 
  }

}
