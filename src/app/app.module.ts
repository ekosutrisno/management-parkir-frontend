import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InfoComponent } from "./component/info/info.component";
import { MasukComponent } from "./component/masuk/masuk.component";
import { KeluarComponent } from "./component/keluar/keluar.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { KendaraanComponent } from "./component/kendaraan/kendaraan.component";
import { KendaraanService } from "./service/kendaraan.service";
import { ParkirService } from "./service/parkir.service";

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    MasukComponent,
    KeluarComponent,
    NavbarComponent,
    KendaraanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [KendaraanService, ParkirService],
  bootstrap: [AppComponent]
})
export class AppModule {}
