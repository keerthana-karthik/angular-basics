import { Component, OnInit, AfterViewInit, SimpleChanges } from "@angular/core";
import { DemoService } from "../demo.service";
import { NgForm, FormGroup } from "@angular/forms";
import { ActivatedRoute, UrlSegment } from "@angular/router";

export enum DemoType {
  TemplateDriven,
  Reactive,
  P2C,
  C2P,
  Services,
  Noauth
}

@Component({
  selector: "app-demo-details",
  templateUrl: "./demo-details.component.html",
  styleUrls: ["./demo-details.component.css"]
})
export class DemoDetailsComponent implements OnInit, AfterViewInit {
  templateDrivenFormData: NgForm;
  reactiveFormData: FormGroup;
  activeFormTypeTemplateDriven: boolean;
  demoType = DemoType;
  activeDemo: DemoType = 0;
  displayData: string;
  constructor(
    private demoService: DemoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.demoService.templateDrivenFormChanged.subscribe((ngForm: NgForm) => {
      this.templateDrivenFormData = this.demoService.getTemplateDrivenFormData();
      this.displayData = this.getTemplateDrivenFormData(ngForm);
    });
    this.demoService.reactiveFormChanged.subscribe((formGroup: FormGroup) => {
      this.reactiveFormData = this.demoService.getReactiveFormData();
      this.displayData = this.getReactiveFormData(formGroup);
    });
    this.route.url.subscribe(urlSegment => {
      let url: string = window.location.href;
      if (url && url.endsWith("template")) {
        this.activeDemo = this.demoType.TemplateDriven;
      } else if (url && url.endsWith("reactive")) {
        this.activeDemo = this.demoType.Reactive;
      } else if (url && url.endsWith("p2c")) {
        this.activeDemo = this.demoType.P2C;
      } else if (url && url.endsWith("c2p")) {
        this.activeDemo = this.demoType.P2C;
      } else if (url && url.endsWith("services")) {
        this.activeDemo = this.demoType.Services;
      } else if (url && url.endsWith("no-auth")) {
        this.activeDemo = this.demoType.Noauth;
      }
    });
  }
  ngAfterViewInit(): void {}
  getTemplateDrivenFormData(form: NgForm): string {
    return (
      this.demoService.stringfyObj(form.value, undefined, 4) +
      this.demoService.stringfyObj(form.control, ["touched", "status"], 2)
    );
  }
  getReactiveFormData(form: FormGroup): string {
    return (
      this.demoService.stringfyObj(form.value, undefined, 4) +
      this.demoService.stringfyObj(form, ["touched", "status"], 2)
    );
  }
}
