import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InfoComponent } from "./component/info/info.component";
import { MasukComponent } from "./component/masuk/masuk.component";
import { KeluarComponent } from "./component/keluar/keluar.component";
import { KendaraanComponent } from "./component/kendaraan/kendaraan.component";
import { HomeComponent } from "./component/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "parkir", component: InfoComponent },
  { path: "add", component: MasukComponent },
  { path: "kendaraan", component: KendaraanComponent },
  { path: "keluar", component: KeluarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
