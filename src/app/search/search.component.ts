import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Subscription, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit, OnDestroy {
  constructor(public router: Router, private server: DataService) {}

  searchInput: FormControl = new FormControl("", [Validators.required]);
  tagResults: Observable<string[]>;
  subscriptions: Subscription[] = [];
  allTags: string[] = [];

  ngOnInit() {
    this.subscriptions.push(
      this.server.getTags().subscribe(tags => (this.allTags = tags))
    );
    this.tagResults = this.searchInput.valueChanges.pipe(
      map(value => {
        if (value)
          return this.allTags.filter(tag => new RegExp(value, "ig").test(tag));
        else return [];
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(x => x.unsubscribe());
  }
}
