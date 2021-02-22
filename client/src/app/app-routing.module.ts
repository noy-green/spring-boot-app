import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DepositComponent } from './deposit/deposit.component';
import { ItemsComponent } from './items/items.component';
import { MainComponent } from './main/main.component';
import { ReadItemComponent } from './read-item/read-item.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdrawal', component: WithdrawalComponent },
  { path: 'item', component: ReadItemComponent},
  { path: '', pathMatch: "full", redirectTo: 'items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
