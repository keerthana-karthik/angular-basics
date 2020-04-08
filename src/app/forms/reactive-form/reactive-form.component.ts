import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { DemoService } from "src/app/demo.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  numberArray: number[] = [1, 2, 3];

  constructor(private demoService: DemoService, private location: Location) {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      textbox: new FormControl(null),
      chekbx: new FormControl(null),
      selectbox: new FormControl(null),
      radiobtn: new FormControl(null)
    });
    this.setDefaultValues();
  }

  onSubmit() {
    this.demoService.setReactiveFormObject(this.reactiveForm);
  }

  setDefaultValues() {
    this.reactiveForm.setValue({
      textbox: "default text",
      chekbx: true,
      selectbox: this.numberArray[0],
      radiobtn: "N"
    });
  }
  reset() {
    this.reactiveForm.reset();
  }

  goBack(): void {
    this.location.back();
  }

  changSelectbox(e) {
    this.reactiveForm.get("selectbox").setValue(e.target.value, {
      onlySelf: true
    });
  }

  getFormData(val: Object, arg2?: any[], arg3?: number): string {
    return this.demoService.stringfyObj(val, arg2, arg3);
  }
}
