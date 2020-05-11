import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input";
import { HttpClientModule } from "@angular/common/http";
import { AlertComponent } from "./alert/alert.component";
import { PlaceHolderDirective } from "./directives/place-holder.directive";

@NgModule({
  declarations: [AlertComponent, PlaceHolderDirective],

  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertComponent,
    PlaceHolderDirective,
  ],
})
export class SharedModule {}
