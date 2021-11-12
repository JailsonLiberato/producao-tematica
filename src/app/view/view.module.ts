import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DetalhesComponent} from "./detalhes/detalhes.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    DashboardComponent, DetalhesComponent
  ],
  imports: [
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [DashboardComponent, DetalhesComponent],
  providers: [],
})
export class ViewModule { }
