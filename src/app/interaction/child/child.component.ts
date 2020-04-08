import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() valueFromParent: string;
  @Input() dataTransferP2C: boolean;
  @Output() childValueChanged = new EventEmitter<string>();
  valueFromChild: string;
  constructor() {}

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.valueFromParent)
      this.valueFromParent = changes.valueFromParent.currentValue;
    if (changes.dataTransferP2C)
      this.dataTransferP2C = changes.dataTransferP2C.currentValue;
    console.log(this.dataTransferP2C);
  }

  onChildValueChange() {
    this.childValueChanged.emit(this.valueFromChild);
  }
}
