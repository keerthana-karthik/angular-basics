import { Component } from "@angular/core";
import { DemoService } from "./demo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private demoService: DemoService) {}
  title = "ang-basics";
}
