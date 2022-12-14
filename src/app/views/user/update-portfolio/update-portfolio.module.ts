import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePortfolioRoutingModule } from './update-portfolio-routing.module';
import { UpdatePortfolioComponent } from './update-portfolio/update-portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdatePortfolioComponent
  ],
  imports: [
    CommonModule,
    UpdatePortfolioRoutingModule,
    ReactiveFormsModule
  ]
})
export class UpdatePortfolioModule { }
