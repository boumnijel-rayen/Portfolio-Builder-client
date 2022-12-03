import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatePortfolioRoutingModule } from './create-portfolio-routing.module';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';


@NgModule({
  declarations: [
    CreatePortfolioComponent
  ],
  imports: [
    CommonModule,
    CreatePortfolioRoutingModule
  ]
})
export class CreatePortfolioModule { }
