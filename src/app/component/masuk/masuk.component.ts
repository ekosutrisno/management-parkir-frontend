import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";

import { Kendaraan } from "src/app/model/kendaraan.model";
import { Parkir } from "src/app/model/parkir.model";
import { ParkirService } from "src/app/service/parkir.service";
import { KendaraanService } from "src/app/service/kendaraan.service";

@Component({
  selector: "app-masuk",
  templateUrl: "./masuk.component.html",
  styleUrls: ["./masuk.component.css"]
})
export class MasukComponent implements OnInit {
  kendaraan: Kendaraan = new Kendaraan();
  parkirLot: Parkir = new Parkir();
  submitted: boolean = false;
  listParkir: Observable<Parkir[]>;

  constructor(
    private kendaraanService: KendaraanService,
    private parkirService: ParkirService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllParkir();
  }

  newKendaraan(): void {
    this.submitted = false;
    this.kendaraan = new Kendaraan();
  }

  addKendaraan() {
    this.kendaraan.parkiLot = this.parkirLot;
    return this.kendaraanService.addMobilMasuk(this.kendaraan).subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  getAllParkir() {
    this.parkirService.getAllParkir().subscribe(parkir => {
      this.listParkir = parkir;
    });
  }

  goToList() {
    this.router.navigate(["/kendaraan"]);
  }

  onSubmit() {
    this.submitted = true;
    this.addKendaraan();
    this.goToList();
  }
}
