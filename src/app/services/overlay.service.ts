import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OverlayService {
  private loader: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public loader$: Observable<boolean> = this.loader.asObservable();

  constructor() {}

  public showLoader() {
    this.loader.next(true);
  }

  public hideLoader() {
    this.loader.next(false);
  }
}
