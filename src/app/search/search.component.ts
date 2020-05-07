import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import Global from "../global";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(public router: Router) {}

  searchInput: FormControl = new FormControl("");
  tagResults: Observable<string[]>;
  subscriptions: Subscription[] = [];

  ngOnInit() {
    this.tagResults = this.searchInput.valueChanges.pipe(
      map(value => {
        if (value)
          return Global.tags.filter(tag => new RegExp(value, "ig").test(tag));
        else return [];
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
