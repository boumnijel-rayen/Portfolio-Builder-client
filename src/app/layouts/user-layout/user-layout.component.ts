import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  @ViewChild('portfolio') portfolio: any;
  @ViewChild('updateP') updateP: any;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  changePoColor(){
    this.portfolio.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.portfolio.nativeElement.style.color = 'white';
    this.updateP.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.updateP.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  changeUpColor(){
    this.updateP.nativeElement.style.background = 'linear-gradient(120deg,#5a2ff5, #58e6ff)';
    this.updateP.nativeElement.style.color = 'white';
    this.portfolio.nativeElement.style.background = 'rgba(255, 255, 255, 0.979)';
    this.portfolio.nativeElement.style.color = 'rgb(13, 37, 255)';
  }

  logout(){
    localStorage.removeItem('token_User')
    localStorage.removeItem('id_User')
    this.router.navigate(['/login'])
  }

}
