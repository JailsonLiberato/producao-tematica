import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DetalhesComponent} from "./view/detalhes/detalhes.component";
import {DashboardComponent} from "./view/dashboard/dashboard.component";

const rotas: Routes = [
  { path: '', component: DashboardComponent },
  {path: 'detalhes', component: DetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rotas, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
