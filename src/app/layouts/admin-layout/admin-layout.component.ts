import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  @ViewChild('profile') profile: any;
  @ViewChild('portfolio') portfolio: any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changePrColor(){
    this.profile.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.profile.nativeElement.style.color = 'white';
    this.portfolio.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.portfolio.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changePoColor(){
    this.portfolio.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.portfolio.nativeElement.style.color = 'white';
    this.profile.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.profile.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  logout(){
    localStorage.removeItem('token_Admin');
    localStorage.removeItem('id_Admin');
    this.router.navigate(['/loginAdmin']);
  }

}
