import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./results/results.component";
import { HomeComponent } from "./home/home.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatButtonModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { PaginatePipe } from "./services/paginate.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ResultsComponent,
    HomeComponent,
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
