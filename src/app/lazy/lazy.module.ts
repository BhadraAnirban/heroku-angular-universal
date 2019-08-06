import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyChildComponent } from '../lazy-child/lazy-child.component';

const routes = [
  {path: 'child', component: LazyChildComponent}
]

@NgModule({
  declarations: [LazyChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyModule { }
