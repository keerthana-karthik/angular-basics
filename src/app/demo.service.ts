import { Injectable, EventEmitter } from "@angular/core";
import { NgForm, FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class DemoService {
  private isLoggedIn: boolean = true;
  templateDrivenFormChanged = new EventEmitter<NgForm>();
  reactiveFormChanged = new EventEmitter<FormGroup>();
  isLoggedInChanged = new EventEmitter<boolean>();
  private templateDrivenFormData: NgForm;
  private reactiveFormData: FormGroup;

  constructor() {}

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
  public seIsLoggedIn(value: boolean) {
    this.isLoggedIn = value;
    this.isLoggedInChanged.emit(value);
  }
  getTemplateDrivenFormData() {
    return this.templateDrivenFormData;
  }
  getReactiveFormData() {
    return this.reactiveFormData;
  }

  setTemplteDrivenFormObject(ngForm: NgForm) {
    this.templateDrivenFormData = ngForm;
    this.templateDrivenFormChanged.emit(this.templateDrivenFormData);
  }
  setReactiveFormObject(formGroup: FormGroup) {
    this.reactiveFormData = formGroup;
    this.reactiveFormChanged.emit(this.reactiveFormData);
  }

  /** Commmon methods:: START */

  removeEmptyKeys(obj: Object): Object {
    for (const prop in obj) {
      if (obj[prop] === null || obj[prop] === undefined || obj[prop] === "") {
        delete obj[prop];
      }
    }
    return obj;
  }
  stringfyObj(val: Object, arg2: string[], arg3: number): string {
    val = this.removeEmptyKeys(val);
    return "\n" + JSON.stringify(val, arg2, arg3);
  }
  createNumArray(n: number): number[] {
    const numArray: number[] = [];
    for (let i = 0; i < n; i++) {
      numArray.push(i);
    }
    return numArray;
  }

  /** Commmon methods:: END */
}
