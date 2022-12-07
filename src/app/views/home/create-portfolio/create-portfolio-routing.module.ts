import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePortfolioComponent } from './create-portfolio/create-portfolio.component';

const routes: Routes = [
  {path: '', component: CreatePortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatePortfolioRoutingModule { }
