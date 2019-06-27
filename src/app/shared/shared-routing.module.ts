import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GalleryMainComponent } from './components/gallery-main/gallery-main.component';
import { PhotoMainComponent } from './components/photo-main/photo-main.component';

const routes: Routes = [
  {
    path: "",
    component: GalleryMainComponent
  },
  {
    path: "photos",
    component: PhotoMainComponent
  },
  { path: "**", component: GalleryMainComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}
