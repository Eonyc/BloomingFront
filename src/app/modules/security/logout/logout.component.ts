import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SessionData } from 'src/app/models/session-data.model';
import { LocalStorageService } from 'src/app/services/shared/local-storage.service';
import { SecurityService } from 'src/app/services/shared/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private securityServie: SecurityService,
    private router: Router
  ) {

   }

  ngOnInit(): void {
    this.localStorageService.RemoveSessioData();
    this.securityServie.RefreshSessionData(new SessionData());
    this.router.navigate(["/home"]);

  }

}
