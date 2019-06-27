import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule, MatToolbarModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  exports: [NavbarComponent, MatToolbarModule, MatGridListModule, MatCardModule]
})
export class CoreModule {}
