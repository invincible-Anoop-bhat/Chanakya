import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Order } from 'src/app/util/orders';
import { FormGroup, FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})

export class OrderEditComponent implements OnInit {
  
  // on: boolean = true ;
  @Input() orderId: number = 0;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  constructor(private fb: FormBuilder,private apiService: ApiService) { }
  //with the help of Order Id make a api call to fetch Order data and show it.
  Order : Order
  OrderForm !: FormGroup
  finishLoading: boolean = false

  ngOnInit(): void {

    this.OrderForm = this.fb.group({
      Id: ['',[Validators.required,Validators.pattern('^[0-9]*')]],
      Custid: ['',[Validators.required,Validators.pattern('^[0-9]*')]],
      OrderDate: ['',Validators.required],
      OrderDetails: ['',Validators.required],
      DeliveryDate: ['',Validators.required],
      PaymentDate: ['',Validators.required],
      PaymentType: ['',Validators.required],
      Completed: [''],
    });

    this.apiService.getOrderById(this.orderId).subscribe((data: Order) => {
      this.Order = data;
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
    console.log(this.Order);
    this.apiService.updateOrder(this.Order).subscribe((data: any) => {
      console.log(data);
      alert("Order details successfully updated")
      this.toggled.emit(false);
    });
  }

}
