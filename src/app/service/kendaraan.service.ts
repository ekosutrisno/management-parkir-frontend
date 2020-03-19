import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class KendaraanService {
  private baseUrl = "http://localhost:8088/api/kendaraan";

  constructor(private http: HttpClient) {}

  getKendaraanById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  searchKendaraanByPlatNomor(plat: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/search?plat=${plat}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  searchKendaraanByWarna(warna: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/all-warna?warna=${warna}`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getAllKendaraan(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  addMobilMasuk(kendaraan: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, kendaraan);
  }
  kendaraanKeluar(platNomor: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/keluar?platNomor=${platNomor}`);
  }

  handleError(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
