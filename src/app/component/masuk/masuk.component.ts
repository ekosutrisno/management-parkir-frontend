import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
  submitted = false;
  listParkir: Observable<Parkir[]>;

  formData: FormGroup;

  constructor(
    private kendaraanService: KendaraanService,
    private parkirService: ParkirService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllParkir();
    this.formData = this.fb.group({
      tipeK: ["", Validators.required],
      warnaK: ["", Validators.required],
      platNomorK: ["", Validators.required],
      parkirLotK: ["", Validators.required]
    });
  }

  newKendaraan(): void {
    this.submitted = false;
    this.kendaraan = new Kendaraan();
    this.parkirLot.id = null;
  }

  get f() {
    return this.formData.controls;
  }

  addKendaraan() {
    this.kendaraan.parkiLot = this.parkirLot;
    if (this.formData.invalid) {
      return;
    } else {
      return this.kendaraanService.addMobilMasuk(this.kendaraan).subscribe();
    }
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
    this.addKendaraan();
    this.submitted = true;
  }
}
