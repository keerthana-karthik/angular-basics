import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { DemoService } from "../../demo.service";
import { Observable } from "rxjs";
import { FormExitService } from "../form-exit.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"]
})
export class TemplateDrivenFormComponent implements OnInit, AfterViewInit {
  @ViewChild("f") templateDrivenForm: NgForm;
  @Input() activeDemoType: string;
  numberArray: number[] = [1, 2, 3];
  constructor(
    private demoService: DemoService,
    private formExitService: FormExitService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    setTimeout(function() {
      document.getElementById("id_set_default_template_form").click();
    }, 500);
  }

  onNgSubmit(): void {
    this.demoService.setTemplteDrivenFormObject(this.templateDrivenForm);
  }

  getFormData(val: Object, arg2?: any[], arg3?: number): string {
    return this.demoService.stringfyObj(val, arg2, arg3);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.templateDrivenForm.dirty) {
      return this.formExitService.confirm("Discard changes for Person?");
    }
    return true;
  }

  reset(templateDrivenForm: NgForm) {
    templateDrivenForm.reset();
  }

  setDefaultValues(templateDrivenForm: NgForm) {
    templateDrivenForm.setValue({
      textbox: "default text",
      chekbx: true,
      selectbox: "1",
      radiobtn: "N"
    });
  }
  goBack(): void {
    this.location.back();
  }
}
