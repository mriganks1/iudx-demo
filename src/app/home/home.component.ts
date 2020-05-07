import { Component, OnInit } from "@angular/core";
import { OverlayService } from "../services/overlay.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private overlay: OverlayService) {}

  ngOnInit() {
    this.overlay.hideLoader();
  }
}
