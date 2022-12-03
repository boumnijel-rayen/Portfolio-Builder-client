import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPortfolioComponent } from './show-portfolio/show-portfolio.component';

const routes: Routes = [
  {path: '', component: ShowPortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowPortfolioRoutingModule { }
