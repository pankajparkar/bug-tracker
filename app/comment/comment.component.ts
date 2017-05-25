import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommentService } from './comment.service'

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    moduleId: module.id
})

export class CommentComponent implements OnInit {
    comments: any[];

    constructor(private commentService: CommentService) { }

    getCommentList(){
        this.comments = this.commentService.getCommentList();
    }

    ngOnInit() { 
        this.getCommentList();
    }
}