import { Component } from "@angular/core";
import { OverlayService } from "./services/overlay.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { Observable } from "rxjs";
import { startWith, delay } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("slide", [
      transition(":enter", [
        style({ transform: "translateY(100%)", opacity: 0 }),
        animate(
          ".3s ease-out",
          style({ transform: "translateY(0)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        animate(
          ".3s ease-out",
          style({ transform: "translateY(-100%)", opacity: 0 })
        )
      ])
    ])
  ]
})
export class AppComponent {
  title = "iudx-tags-catalogue";
  constructor(public overlay: OverlayService) {}
  public loader: Observable<boolean> = this.overlay.loader$.pipe(delay(0));
}
