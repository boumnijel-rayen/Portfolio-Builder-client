import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataUserService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.css']
})
export class UpdatePortfolioComponent implements OnInit {


  token : any = localStorage.getItem('token_User');
  id_user : any = localStorage.getItem('id_User');

  resPortfolioId:any
  resBio:any

  resPortMod : any;
  resBioMod : any;

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
  myForm : any;
  constructor(private dataUser : DataUserService, private builder : FormBuilder) { 
    this.myForm = this.builder.group({
      full_name : ['', Validators.required],
      occupation : ['', Validators.required],
      career_summary : ['', Validators.required],
      philosophy_statement : ['', Validators.required],
      biography : ['', Validators.required],
      website : ['', Validators.required],
      email : ['', Validators.required]
    })
  }

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

  updatePortfolio(){
    let Portfolio = {
      full_name : this.myForm.value.full_name,
      occupation : this.myForm.value.occupation,
      career_summary : this.myForm.value.career_summary,
      philosophy_statement : this.myForm.value.philosophy_statement
    }
    let Bio = {
      description : this.myForm.value.biography,
      personal_website : this.myForm.value.website,
      email : this.myForm.value.email
    }

    this.dataUser.getIdPortfolio(this.token,this.id_user).subscribe(data => {
      this.resPortMod = data;
    }).add(()=>{
      this.dataUser.getPortfolio(this.token,this.resPortMod.portfolio).subscribe(data => {
        this.resBioMod = data;
      }).add(()=>{
        this.dataUser.updatePortfolio(this.token,this.resPortMod.portfolio,Portfolio).subscribe().add(()=>{
          this.dataUser.updateBio(this.token,this.resBioMod.bio,Bio).subscribe();
        })
      })
    })
  }

}
