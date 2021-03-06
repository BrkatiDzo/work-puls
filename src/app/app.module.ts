import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AlbumService } from './core/services/album.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule {}
