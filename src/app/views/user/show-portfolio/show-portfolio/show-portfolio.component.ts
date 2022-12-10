import { Component, OnInit } from '@angular/core';
import { DataUserService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-show-portfolio',
  templateUrl: './show-portfolio.component.html',
  styleUrls: ['./show-portfolio.component.css']
})
export class ShowPortfolioComponent implements OnInit {
  
  token : any = localStorage.getItem('token_User');
  id_user : any = localStorage.getItem('id_User');

  resPortfolioId:any
  resBio:any

  id_portfolio : any;
  id_bio : any;

  bio : any;
  portfolio : any;
  medias : any;
  accs: any;
  awards: any;
  certs: any;
  vols: any;
  refs: any;
  constructor(private dataUser : DataUserService) { }

  ngOnInit(): void {
    this.dataUser.getIdPortfolio(this.token,this.id_user).subscribe(data => {
      this.resPortfolioId = data;
      this.id_portfolio = this.resPortfolioId.portfolio;
    }).add(()=>{
      this.dataUser.getPortfolio(this.token,this.id_portfolio).subscribe(data => {
        this.portfolio = data;
        this.id_bio = this.portfolio.bio;
      }).add(()=>{
        this.dataUser.getBio(this.token,this.id_bio).subscribe(data => {
          this.bio = data;
        }).add(()=>{
          this.dataUser.getSocialMedia(this.token,this.id_bio).subscribe(data => {
            this.medias = data;
          }).add(()=>{
            this.dataUser.getAccomplishments(this.token,this.id_portfolio).subscribe(data => {
              this.accs = data;
            }).add(()=>{
              this.dataUser.getAwards(this.token,this.id_portfolio).subscribe(data => {
                this.awards = data;
              }).add(()=>{
                this.dataUser.getCertifications(this.token,this.id_portfolio).subscribe(data => {
                  this.certs = data;
                }).add(()=>{
                  this.dataUser.getVolunteering(this.token,this.id_portfolio).subscribe(data => {
                    this.vols = data;
                  }).add(()=>{
                    this.dataUser.getReferences(this.token,this.id_portfolio).subscribe(data => {
                      this.refs = data;
                    }).add(()=>{
                      console.log(this.portfolio);
                      console.log(this.bio);
                      console.log(this.medias);
                      console.log(this.accs);
                      console.log(this.awards);
                      console.log(this.certs);
                      console.log(this.vols);
                      console.log(this.refs);
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  }

}
