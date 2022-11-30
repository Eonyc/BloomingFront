import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data-bloom';
import { UserCredentialsModel } from 'src/app/models/user-credencials.model';
import {MD5} from 'crypto-js';
import { SecurityService } from 'src/app/services/shared/security.service';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { SessionData } from 'src/app/models/session-data.model';
import { Router } from '@angular/router';


declare const OpenGeneralMsgModal: any;
//**clave qxnTlBIObJ */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private securityService: SecurityService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form = this.fb.group({
      username: ["", [Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      password: ["", [Validators.required, Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    });
  }
  
  Login(){
    if (this.form.invalid){
      OpenGeneralMsgModal(GeneralData.INVALID_FORM_MESSAGE)
    } else {
      let modelo = new UserCredentialsModel();
      modelo.userName = this.GetForm['username'].value;
      modelo.passWord = MD5(this.GetForm['password'].value).toString();
      this.securityService.Login(modelo).subscribe({
        next: (data: SessionData) => { 
          console.log(data);
          this.localStorageService.SaveSessionData(data);
          data.isLoggedIn = true;
          this.securityService.RefreshSessionData(data);
          this.router.navigate(["/home"]);
        },
        error: (error:any) => {
          OpenGeneralMsgModal(GeneralData.GENERAL_ERROR_MESSAGE)

        }
      });
    }

  }

  get GetForm(){
    return this.form.controls;
  }
  
}
