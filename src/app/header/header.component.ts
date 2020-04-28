import { Component, OnInit } from "@angular/core";
import { WindowRef } from '../window.ref.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  constructor(private winRef: WindowRef){
    
  }
  ngOnInit(): void {
    this.winRef.nativeWindow.addEventListener('click', function(e){   
      if (document.getElementById('nav').contains(e.target)){
        this.collapsed = false;
      } else{
        this.collapsed = true;
      }
    });
  }
  
}
