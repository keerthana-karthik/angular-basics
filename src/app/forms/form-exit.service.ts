import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FormExitService {
  constructor() {}
  confirm(message?: string): Observable<boolean> | boolean {
    const confirmation = confirm(message || "Are you sure?");
    return confirmation;
  }
}
