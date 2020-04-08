import { Component, OnInit } from "@angular/core";
import { DemoService } from "../demo.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.demoService.getIsLoggedIn();
  }

  onLoggedInChkBxChange() {
    let element = <HTMLInputElement>document.getElementById("loggedInChkBx");
    this.isLoggedIn = element.checked;
    this.demoService.seIsLoggedIn(this.isLoggedIn);
  }
}
