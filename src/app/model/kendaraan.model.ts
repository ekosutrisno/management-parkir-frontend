import { Parkir } from "./parkir.model";

export class Kendaraan {
  id: number;
  platNomor: string;
  tipe: string;
  warna: string;
  tanggalMasuk: string;
  tanggalKeluar: string;
  isKeluar: boolean;
  parkiLot: Parkir;
}
