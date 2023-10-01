import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-customerinfo',
  templateUrl: './customerinfo.component.html',
  styleUrls: ['./customerinfo.component.css']
})
export class CustomerinfoComponent implements OnInit {
  
  // on: boolean = true ;
  @Input() customerId: string = "noCustomerSelected";
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();
  constructor() { }
  //with the help of customer Id make a api call to fetch customer data and show it.

  ngOnInit(): void {
  }
  onClick(){
    // this.on = !this.on;
    // this.toggled.emit(this.on);
    this.toggled.emit(false);
  }

}
