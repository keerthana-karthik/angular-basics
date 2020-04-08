import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { DemoService } from "../../demo.service";
import { ActivatedRoute, Params } from "@angular/router";
import { NgForm, FormGroup } from "@angular/forms";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit, OnChanges {
  //@Input() numchildren: string;
  valueFromParent: string;
  valueFromChild: string;
  dataTransferP2C: boolean;
  array_of_children: any[];
  templateDrivenFormData: NgForm;
  reactiveFormData: FormGroup;
  numchildren: string;

  constructor(
    private demoService: DemoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.numchildren = "1";
    this.demoService.templateDrivenFormChanged.subscribe((ngForm: NgForm) => {
      this.templateDrivenFormData = this.demoService.getTemplateDrivenFormData();
      this.numchildren = this.templateDrivenFormData.value.selectbox;
      this.array_of_children = this.demoService.createNumArray(
        parseInt(this.numchildren)
      );
    });
    this.demoService.reactiveFormChanged.subscribe((formGroup: FormGroup) => {
      this.reactiveFormData = this.demoService.getReactiveFormData();
      this.numchildren = this.reactiveFormData.value.selectbox;
      this.array_of_children = this.demoService.createNumArray(
        parseInt(this.numchildren)
      );
    });
    this.array_of_children = this.demoService.createNumArray(
      parseInt(this.numchildren)
    );
    this.route.params.subscribe((params: Params) => {
      if (params["direction"] == "p2c") {
        this.dataTransferP2C = true;
      }
    });
  }
  ngOnChanges(): void {
    this.array_of_children = this.demoService.createNumArray(
      parseInt(this.numchildren)
    );
  }

  onChildValueUpdated(valueFromChild: string): void {
    this.valueFromChild = valueFromChild;
  }
}
