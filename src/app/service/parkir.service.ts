import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ParkirService {
  private baseUrl = "http://localhost:8088/api/parkir";

  constructor(private http: HttpClient) {}

  getParkirById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllParkir(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  addParkir(parkir: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, parkir);
  }
}
