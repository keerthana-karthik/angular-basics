import { Component } from "@angular/core";
import { DemoService } from "./demo.service";
import { WindowRef } from './window.ref.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private demoService: DemoService, private winRef: WindowRef) {}
  title = "ang-basics";
  
  ngOnInit(): void {
    this.winRef.nativeWindow.addEventListener('click', function(e){   
      if (!document.getElementById('nav').contains(e.target)){
        document.getElementsByClassName('navbar-collapse')[0].classList.add('collapse');
      }
    });
  }
}
