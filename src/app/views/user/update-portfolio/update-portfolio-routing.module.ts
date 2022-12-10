import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePortfolioComponent } from './update-portfolio/update-portfolio.component';

const routes: Routes = [
  {path: '', component: UpdatePortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePortfolioRoutingModule { }
