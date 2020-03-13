import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { ParkirService } from "src/app/service/parkir.service";
import { Parkir } from "src/app/model/parkir.model";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {

  parkir: Observable<Parkir[]>;
  id: number = 5;
  status: string;

  constructor(
    private parkirService: ParkirService
  ) {}

  ngOnInit(): void {
    this.getAllParkir();
  }

  getAllParkir() {
    this.parkirService.getAllParkir().subscribe(parkir => {
      this.parkir = parkir;
    });
  }

  cekStatus(tes: boolean): string {
    if (!tes == true) this.status = "Tersedia";
    else this.status = "Tersisi";
    return this.status;
  }
}
