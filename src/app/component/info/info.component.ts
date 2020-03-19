import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { ParkirService } from "src/app/service/parkir.service";
import { Parkir } from "src/app/model/parkir.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"]
})
export class InfoComponent implements OnInit {
  parkir: Observable<Parkir[]>;
  CekParkir: Observable<Parkir[]>;
  status: string;
  buttonTxt: string = "Add Parkir Slot";
  submitted = false;
  showHide = false;
  duplicate = false;
  dataParkir: Parkir = new Parkir();
  inputForm: FormGroup;

  constructor(private parkirService: ParkirService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getAllParkir();

    this.inputForm = this.fb.group({
      dataParkir: ["", Validators.required]
    });
  }

  get f() {
    return this.inputForm.controls;
  }

  onSubmit() {
    this.getExistParkirName();
    this.submitted = true;
    this.showHide = true;
    this.addSlotParkir();
    this.goToList();
    this.dataParkir.nama = "";
  }

  goToList() {
    this.getAllParkir();
  }

  handleSubmit(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit();
    }
  }

  newParkir() {
    if (this.showHide == false) this.showHide = true;
    else this.showHide = false;

    this.submitted = false;
    this.dataParkir = new Parkir();
    this.btnTextChange();
  }

  getExistParkirName() {
    return this.parkirService
      .getParkirByNama(this.dataParkir.nama)
      .subscribe(data => {
        this.CekParkir = data;
        console.log(this.CekParkir);
      });
  }

  addSlotParkir() {
    if (this.inputForm.invalid) {
      return;
    } else {
      if (this.CekParkir != null) {
        this.duplicate = true;
        console.log(this.duplicate);
      } else {
        // this.parkirService.addParkir(this.dataParkir).subscribe();
        this.submitted = false;
      }
    }
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

  btnTextChange() {
    if (!this.showHide) this.buttonTxt = "Add Parkir Slot";
    else this.buttonTxt = "Batal";
  }
}
