import { PostService } from './../../../services/post.service';
import { User, Post } from './../../../interfaces/post.interface';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() isNew: boolean;
  @Input() postData: Post;
  postForm: FormGroup = this.fb.group({
    userSelect : [0],
    title : ['', Validators.required ],
    textArea: ['', Validators.required ],
  });
  private idPost: number;
  resultOk: boolean = false;
  resultError: boolean = false;
  resultFormNotValid: boolean = false;
  
  user : User;
  userList : any;
  textTextArea: string;
  titleInput: string;
  userSelect: number;
  // UI
  load: boolean = false;

  constructor(private fb: FormBuilder,
               private postService: PostService) { }

  ngOnInit() {
    this._setData(this.postData);
  }

  public setButton(): string{
    
    return this.isNew ? 'Crear': 'Modificar';
  }
  private _setData(postData){
    this.postService.getUsers().then(data => {
      this.userList = data;
      //console.log(this.userList);
    });
    if(!this.isNew){
      this.user = postData.userData;
      this.textTextArea=postData.body;
      this.titleInput= postData.title;
      this.idPost = postData.id;
    } else{
      this.userSelect=0;
      this.textTextArea="";
      this.titleInput= "";
      this.idPost=-1;
    }
  }

  onButton() {
    this.resultError = false;
    this.resultFormNotValid = false;
    this.resultOk = false;

    if(!this.postForm.valid){
      this.resultFormNotValid = true;
      return;
    }
    
    if(!this.isNew){
      this.postService.editPosts(this.idPost, this.titleInput, this.textTextArea, this.user.id)
        .then(data => {
          this.resultOk = true;
        }).catch(error => {
          this.resultError = true;
        });
    }
    else {
      if(!this.userSelect || this.userSelect === 0){
        this.resultFormNotValid = true;
        return;
      }
      this.postService.addPosts(this.titleInput, this.textTextArea, this.userSelect).then(data => {
        this.resultOk = true;
      }).catch(error => {
        this.resultError = true;
      });
    }
  }
}
