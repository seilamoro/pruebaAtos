import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
	_cmsUrl: string;

  constructor(private httpClient:HttpClient) {
    this._cmsUrl = "http://localhost:3000";
  }

  public getPosts() {
    return new Promise((resolve, reject) => {
      fetch(this._cmsUrl+'/posts/').then(async response => {
          const data = await response.json();
          if (response.ok) {
              resolve(data);
              return;
          } else {
              reject('Error');
              return;
          }
      }).catch(error => {
          reject('Error');
          return;
      });
    });
  }


}
