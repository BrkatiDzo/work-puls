import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getUsers(id) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  getAlbums() {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/albums`);
  }
  getPhoto(albumId) {
    return this.http.get<any>(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    );
  }

  // getPhotosTest() {
  //   return this.http.get<any>(`https://jsonplaceholder.typicode.com/photos`);

  // }

  deleteUser(id) {
    return this.http.delete<any>(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
  }

  private role = new BehaviorSubject({});

  currentRole = this.role.asObservable();

  sendMessage(role) {
    this.role.next(role);
  }

  getMessage(): Observable<any> {
    return this.role.asObservable();
  }
}
