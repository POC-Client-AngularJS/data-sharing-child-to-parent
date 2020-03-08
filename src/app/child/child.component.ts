import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  private strValueChild: string;
  @Output() eventEmittedByChild = new EventEmitter<string>();
  constructor() {
    this.strValueChild = "Value from ChildComponent.";
  }
  ngOnInit() {}
  onClickSendData() {
    this.eventEmittedByChild.emit(this.strValueChild);
  }
}
