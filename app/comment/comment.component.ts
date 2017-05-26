import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommentService } from './comment.service';
import { UtilityService } from '../shared/utility.service';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    moduleId: module.id
})

export class CommentComponent implements OnInit {
    comments: any[];
    filteredComments: any[];

    constructor(private commentService: CommentService, private utilityService:UtilityService) { }

    getCommentList(){
        this.comments = this.commentService.getCommentList();
        this.filteredComments = this.utilityService.groupBy(this.comments, 'name');
    }

    ngOnInit() { 
        this.getCommentList();
    }
}