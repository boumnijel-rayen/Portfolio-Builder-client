import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowPortfolioRoutingModule } from './show-portfolio-routing.module';
import { ShowPortfolioComponent } from './show-portfolio/show-portfolio.component';


@NgModule({
  declarations: [
    ShowPortfolioComponent
  ],
  imports: [
    CommonModule,
    ShowPortfolioRoutingModule
  ]
})
export class ShowPortfolioModule { }
