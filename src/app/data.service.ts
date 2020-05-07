import { Injectable } from "@angular/core";
import Globals from "./global";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

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
  BASE_URL = Globals.api;

  constructor(private http: HttpClient) {}

  getTagResults(str) {
    return this.http.get<TagResults[]>(this.BASE_URL + "search", {
      params: { "attribute-name": "(tags)", "attribute-value": `(${str})` }
    });
  }
}
