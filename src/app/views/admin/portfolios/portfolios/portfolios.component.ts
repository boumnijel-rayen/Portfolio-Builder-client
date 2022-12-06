import { Component, OnInit } from '@angular/core';
import { DataAdminService } from 'src/app/services/data-admin.service';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {

  token : string = localStorage.getItem('token_Admin') || '';
  id = localStorage.getItem('id_Admin');
  portfolios : any;
  constructor(private dataAService : DataAdminService) { }

  ngOnInit(): void {
  }

  getAllPortfolios(){
    this.dataAService.getAllPortfolios(this.token).subscribe(
      (data) => {
        this.portfolios = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deletePortfolio(id: number){
    this.dataAService.deletePortfolio(id, this.token).subscribe(
      (data) => {
        this.getAllPortfolios();
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
