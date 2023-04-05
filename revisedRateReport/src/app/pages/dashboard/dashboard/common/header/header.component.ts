import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('toolbar') toolbar: any;
  
  //setting drawer open by default
  isDrawerOpened = true;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
  }

  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
    if (this.isDrawerOpened) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }

}
