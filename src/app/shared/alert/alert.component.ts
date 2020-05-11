import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"],
})
export class AlertComponent implements OnInit {
  @Input() errorMessage: string;
  @Output() closeAlert = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeAlert.emit(null);
  }
}
