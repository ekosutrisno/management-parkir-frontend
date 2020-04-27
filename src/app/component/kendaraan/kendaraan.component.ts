import { Component, OnInit } from "@angular/core";
import { KendaraanService } from "src/app/service/kendaraan.service";
import { Kendaraan } from "src/app/model/kendaraan.model";
import { Observable} from "rxjs";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ParkirService } from "src/app/service/parkir.service";
import { Parkir } from "src/app/model/parkir.model";

@Component({
  selector: "app-kendaraan",
  templateUrl: "./kendaraan.component.html",
  styleUrls: ["./kendaraan.component.css"]
})
export class KendaraanComponent implements OnInit {
  kendaraan: Observable<Kendaraan[]>;
  detailKendaraan: Kendaraan = new Kendaraan();
  detailParkir: Parkir = new Parkir();
  status: string;
  platParameter: string = "";
  warnaParameter: string = "";
  closeResult: string;

  constructor(
    private kendaraanService: KendaraanService,
    private parkirService: ParkirService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getAllKendaraan("");
  }

  getKendaraanById(id: number) {
    return this.kendaraanService.getKendaraanById(id).subscribe(data => {
      this.detailKendaraan = data;
    });
  }
  getParkirById(id: number) {
    return this.parkirService.getParkirById(id).subscribe(data => {
      this.detailParkir = data;
    });
  }

  getAllKendaraanByWarna(warna: string) {
    return this.kendaraanService
      .searchKendaraanByWarna(warna)
      .subscribe(kendaraan => {
        this.kendaraan = kendaraan;
      });
  }

  getAllKendaraan(platnomor: string) {
    return this.kendaraanService
      .searchKendaraanByPlatNomor(platnomor)
      .subscribe(kendaraan => {
        this.kendaraan = kendaraan;
      });
  }

  cekStatus(tes: boolean): string {
    if (!tes == true) this.status = "Masuk";
    else this.status = "Keluar";
    return this.status;
  }

  onSubmit() {
    this.getAllKendaraan(this.platParameter);
  }

  handleSubmit(event: any) {
    if (event.keyCode === 13) {
      this.getAllKendaraan(this.platParameter);
    }
  }

  onSubmitWarna() {
    this.getAllKendaraanByWarna(this.warnaParameter);
  }

  handleSubmitWarna(event: any) {
    if (event.keyCode === 13) {
      this.getAllKendaraanByWarna(this.warnaParameter);
    }
  }

  open(content: any, id: any, idP: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    this.getKendaraanById(id);
    this.getParkirById(idP);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
