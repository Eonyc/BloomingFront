import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data-bloom';
import { BrandModel } from 'src/app/models/parameters/brand.model';
import { LocalStorageService } from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  url: string = GeneralData.BUSSINESS_URL;
  token: string = "";

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetToken();
   }

    GetRecordList(): Observable<BrandModel[]>{
      return this.http.get<BrandModel[]>(`${this.url}/marcas`)
    }

    SaveRecord(data: BrandModel): Observable<BrandModel>{
      return this.http.post<BrandModel>(`${this.url}/marcas`
      ,{
        name: data.name
      },
      {
        headers: new HttpHeaders ({
          Authorization: `Bearer ${this.token}`
        })
      });
    }

    SearchRecord(id: Number): Observable<BrandModel>{
      return this.http.get<BrandModel>(`${this.url}/marcas/{id}`);
    }

    EditRecord(data: BrandModel): Observable<BrandModel>{
      return this.http.put<BrandModel>(`${this.url}/marcas/${data.id}`
      ,{
        id: data.id,
        name: data.name
      },
      {
        headers: new HttpHeaders ({
          Authorization: `Bearer ${this.token}`
        })
      });
    }

    RemoveRecord(id: number): Observable<any>{
      return this.http.delete(`${this.url}/marcas/${id}`,
      {
        headers: new HttpHeaders ({
          Authorization: `Bearer ${this.token}`
        })
      });
    }

}

      