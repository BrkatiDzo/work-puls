import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { GalleryMainComponent } from './components/gallery-main/gallery-main.component';
import { DialogOverviewExampleDialog, PhotoMainComponent } from './components/photo-main/photo-main.component';
import { FilterPipe } from './custom-pipes/photo-filter.pipe';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    PhotoMainComponent,
    GalleryMainComponent,
    DialogOverviewExampleDialog,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    MatDialogModule,
    ScrollingModule
  ],
  exports: [
    PhotoMainComponent,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    GalleryMainComponent,
    SharedRoutingModule,
    MatDialogModule,
    DialogOverviewExampleDialog,
    FilterPipe,
    ScrollingModule
  ],
  entryComponents: [DialogOverviewExampleDialog]
})
export class SharedModule {}
