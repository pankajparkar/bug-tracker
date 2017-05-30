import { Injectable } from '@angular/core';

@Injectable()

export class CommentService {
    constructor() { }
    getCommentList(){
        return [
            {id: 1, name: "Pankaj", title: "", comment: "This is test 1", status: 1},
            {id: 2, name: "Pankaj", title: "", comment: "This is test 2", status: 2},
            {id: 3, name: "Pankaj", title: "", comment: "This is test 3", status: 3},
            {id: 4, name: "Pankaj", title: "", comment: "This is test 4", status: 1},
            {id: 5, name: "Pankaj", title: "", comment: "This is test 5", status: 2},
            {id: 6, name: "Kamlesh", title: "", comment: "This is test 5 Kamlesh", status: 1},
            {id: 7, name: "Kamlesh", title: "", comment: "This is test 5 Kamlesh", status: 2},
            {id: 8, name: "Kamlesh", title: "", comment: "This is test 5 Kamlesh", status: 3},
            {id: 9, name: "Tom", title: "", comment: "This is test 9", status: 1},
            {id: 10, name: "Tom", title: "", comment: "This is test 10", status: 2},
        ]
    }
}