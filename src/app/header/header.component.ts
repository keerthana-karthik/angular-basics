import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Router, NavigationStart, Event } from '@angular/router';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() containerClicked: boolean;
  collapsed = true;
  constructor(private router: Router){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.collapsed = true;
      }
    });
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.containerClicked = changes.containerClicked.currentValue;
    this.collapsed = this.containerClicked;
  }
}
