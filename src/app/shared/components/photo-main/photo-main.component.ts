import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlbumService } from '../../../core/services/album.service';

export interface User {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: "app-photo-main",
  templateUrl: "./photo-main.component.html",
  styleUrls: ["./photo-main.component.css"]
})
export class PhotoMainComponent implements OnInit {
  myControl = new FormControl();
  photosOfAlbum: any[] = [];
  subscription: Subscription;

  constructor(
    private service: AlbumService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.service.getMessage().subscribe(albumID => {
      this.service.getPhoto(albumID).subscribe(res => {
        this.photosOfAlbum = res;
      });
    });
  }

  openDialog(id) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: this.photosOfAlbum.find(item => item.id === id)
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }
  deletePhotos(id) {
    let photo = this.photosOfAlbum.find(item => item.id === id);
    this.photosOfAlbum = this.photosOfAlbum.filter(
      item => item.id !== photo.id
    );
    console.log("Object Deleted", photo);
    this.service.deleteUser(photo.id).subscribe(res => console.log(res));
  }
}

@Component({
  selector: "app-photo-dialog",
  templateUrl: "./photo-dialog.component.html",
  styleUrls: ["./photo-main.component.css"]
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
