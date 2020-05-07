import { Injectable } from "@angular/core";
import Globals from "./global";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

interface TagObject {
  type: string;
  value: string;
}

export interface TagResults {
  id: string;
  itemDescription: string;
  updatedAt: TagObject;
  provider: TagObject;
  onboardedBy: string;
  itemStatus: TagObject;
  resourceId: TagObject;
}

@Injectable({
  providedIn: "root"
})
export class DataService {
  private BASE_URL = Globals.api;

  constructor(private http: HttpClient) {}

  getTagResults(str) {
    return this.http.get<TagResults[]>(this.BASE_URL + "v1/search", {
      params: { "attribute-name": "(tags)", "attribute-value": `(${str})` }
    });
  }

  tagsList: string[] = [];
  getTags() {
    if (this.tagsList.length > 0) return of(this.tagsList);
    else
      return this.http
        .get<string[]>(this.BASE_URL + "internal_apis/list/tags")
        .pipe(
          tap(tags => {
            this.tagsList = tags;
          })
        );
  }
}
