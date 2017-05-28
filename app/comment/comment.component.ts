import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommentService } from './comment.service';
import { UtilityService } from '../shared/utility.service';
import { FilterByNameService } from './../filter-by-name/filter-by-name.service';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    moduleId: module.id
})

export class CommentComponent implements OnInit {
    comments: any[];
    filteredComments: any[];

    constructor(
        private commentService: CommentService, 
        private utilityService:UtilityService,
        private filterByNameService:FilterByNameService
    ) { }

    getCommentList(){
        this.comments = this.commentService.getCommentList();
    }

    ngOnInit() { 
        this.getCommentList();
        this.filteredComments = this.utilityService.groupBy(this.comments, 'name');
    }
}