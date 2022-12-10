import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePortfolioRoutingModule } from './update-portfolio-routing.module';
import { UpdatePortfolioComponent } from './update-portfolio/update-portfolio.component';


@NgModule({
  declarations: [
    UpdatePortfolioComponent
  ],
  imports: [
    CommonModule,
    UpdatePortfolioRoutingModule
  ]
})
export class UpdatePortfolioModule { }
