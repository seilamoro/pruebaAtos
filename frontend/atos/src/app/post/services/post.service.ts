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

  public addPosts(title: string, body: string, userId: number) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
          title: title,
          body: body,
          userId: userId
      })
    };

    return new Promise((resolve, reject) => {
      fetch(this._cmsUrl+'/posts/', requestOptions).then(async response => {
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

  public editPosts(idPost: number, title: string, body: string, userId: number) {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
          id: idPost,
          title: title,
          body: body,
          userId: userId
      })
    };
    
    return new Promise((resolve, reject) => {
      fetch(this._cmsUrl+'/posts/', requestOptions).then(async response => {
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

  public getUsers() {
    return new Promise((resolve, reject) => {
      fetch(this._cmsUrl+'/users/').then(async response => {
          const data = await response.json();
          if (response.ok) {
              resolve(data.data);
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

  getUsersTest() {
    return this.httpClient.get<any>(this._cmsUrl+'/users/');
  }

  getPostsTest() {
    return this.httpClient.get<any>(this._cmsUrl+'/posts/');
  }

}
