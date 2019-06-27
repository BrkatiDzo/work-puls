import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AlbumService } from '../../../core/services/album.service';

@Component({
  selector: "app-gallery-main",
  templateUrl: "./gallery-main.component.html",
  styleUrls: ["./gallery-main.component.css"]
})
export class GalleryMainComponent implements OnInit {
  userList = [];
  mainArr = [];
  myControl = new FormControl();

  constructor(public service: AlbumService, private router: Router) {}
  ngOnInit() {
    this.service.getAlbums().subscribe(albums => {
      albums.forEach(element => {
        if (!this.userList.find(i => i.id === element.userId)) {
          this.service.getUsers(element.userId).subscribe(user => {
            this.userList.push(user);
            element.user = user.name;
          });
        } else {
          element.user = this.userList.find(i => i.id === element.userId).name;
        }
        this.mainArr.push(element);
      });
    });
  }

  getAlbumInfo(index) {
    this.service.sendMessage(this.mainArr[index].id);
    this.router.navigate(["photos"], { state: { example: "bar" } });
  }
}
