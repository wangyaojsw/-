import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'pages', loadChildren: './pages/pages.module#PagesModule'},
    ]
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config),
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
