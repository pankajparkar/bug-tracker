import { Injectable } from '@angular/core';

@Injectable()

export class WorklogService {
    constructor() { }
    getWorklogList(){
        return [
            {id: 1, name: "Pankaj", Comment: "This is test 1"},
            {id: 2, name: "Pankaj", Comment: "This is test 2"},
            {id: 3, name: "Pankaj", Comment: "This is test 3"},
            {id: 4, name: "Pankaj", Comment: "This is test 4"},
            {id: 5, name: "Pankaj", Comment: "This is test 5"},
        ]
    }
}