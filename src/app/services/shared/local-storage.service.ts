import { Injectable } from '@angular/core';
import { SessionData } from 'src/app/models/session-data.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  SaveSessionData(data: SessionData): boolean{
    let saved = localStorage.getItem("sesion-data");
    if(saved){
      return false;
    }else{
      let stringData = JSON.stringify(data);
      localStorage.setItem("sesion-data", stringData);
      return true;
    }
  }

  RemoveSessioData(){
    localStorage.removeItem("session-data");
  }

  GetToken(): string{
    let saved = localStorage.getItem("session-data");
    if (saved){
      let data = JSON.parse(saved);
      return data.token;
    }
    return "";
  }

}
