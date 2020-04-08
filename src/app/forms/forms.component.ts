import { Component, OnInit } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";
import { DemoService } from "../demo.service";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {}
}
