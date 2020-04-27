import { Component, OnInit } from "@angular/core";

import { KendaraanService } from "../../service/kendaraan.service";
import { ResponseByPlatNomor } from "../../model/responseByPlatNomor.model";

@Component({
  selector: "app-keluar",
  templateUrl: "./keluar.component.html",
  styleUrls: ["./keluar.component.css"]
})
export class KeluarComponent implements OnInit {
  platNomor: string;
  dataInfo: ResponseByPlatNomor;
  visibleOut: boolean = false;

  constructor(private kendaraanService: KendaraanService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.getDataKendaraanByPlatNomor(this.platNomor);
    this.visibleOut = true;
    this.platNomor = "";
  }

  getDataKendaraanByPlatNomor(platNomor: string) {
    return this.kendaraanService.kendaraanKeluar(platNomor).subscribe(data => {
      this.dataInfo = data.result;
    });
  }
  getKendaraanById(id: number) {
    return this.kendaraanService.getKendaraanById(id).subscribe(data => {
      this.dataInfo = data;
    });
  }
  clear() {
    this.visibleOut = false;
  }
}
