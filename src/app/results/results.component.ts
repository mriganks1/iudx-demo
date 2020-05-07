import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { switchMap, catchError, tap } from "rxjs/operators";
import { DataService, TagResults } from "../data.service";
import { OverlayService } from "../overlay.service";

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private backend: DataService,
    private overlay: OverlayService
  ) {}

  resourceList: Observable<TagResults[]>;
  totalItems: number = 0;
  itemsPerPage: number = 10;
  pageNo: number = 0;
  tagName: string = "";

  ngOnInit() {
    this.overlay.showLoader();
    this.resourceList = this.route.queryParamMap.pipe(
      switchMap(params => {
        this.tagName = params.get("tag");
        return this.backend.getTagResults(this.tagName).pipe(
          catchError(err => {
            this.overlay.hideLoader();
            return [];
          }),
          tap(res => {
            this.totalItems = res.length;
            this.overlay.hideLoader();
          })
        );
      })
    );
  }

  pageChange(e) {
    this.pageNo = e.pageIndex;
    window.scrollTo(0, 0);
  }
}
