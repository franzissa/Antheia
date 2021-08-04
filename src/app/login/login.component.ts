import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output()variableEvent: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public sendChange(value: boolean){
    this.variableEvent.emit(value);
  }
}
