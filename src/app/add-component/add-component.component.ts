import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Comments } from './add-component.modal';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {
  book:Book;
  comments:Comments[]=[];
  name:string;
  email:string;
  comment:string;
  newc:Comments;

  constructor(private svc:DataService, private route:ActivatedRoute) {  }

  ngOnInit() {
    
  }
  addComment(){
    this.newc=new Comments(this.name,this.email,this.comment);
    this.comments.push(this.newc);
    console.log(this.comments);
    

  }

}
