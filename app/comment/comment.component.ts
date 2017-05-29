import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommentService } from './comment.service';
import { UtilityService } from '../shared/utility.service';
import { FilterByService } from './../filter-by/filter-by.service';

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    moduleId: module.id
})

export class CommentComponent implements OnInit {
    comments: any[];
    filterName$: any;

    constructor(
        private commentService: CommentService, 
        private utilityService:UtilityService,
        private FilterByService:FilterByService
    ) { }

    getCommentList(){
        this.comments = this.commentService.getCommentList();
    }

    ngOnInit() { 
        this.getCommentList();
        this.filterName$ = this.FilterByService.filterNameObservable();
    }
}