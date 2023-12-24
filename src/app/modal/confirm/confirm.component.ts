import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() TextToDisplay: string = "";
  @Output() confirmed: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  clickyes(){
    this.confirmed.emit(true);
  }
  clickno(){
    this.confirmed.emit(false);
  }

}
