import { Injectable } from '@angular/core';

@Injectable()

export class TicketDetailsService {
    constructor() { }
    getTicketDetailsList(){
        return [
            {id: 1, name: "Pankaj", title: "", description: "This is test 1"},
            {id: 2, name: "Pankaj", title: "", description: "This is test 2"},
            {id: 3, name: "Pankaj", title: "", description: "This is test 3"},
            {id: 4, name: "Pankaj", title: "", description: "This is test 4"},
            {id: 5, name: "Pankaj", title: "", description: "This is test 5"},
            {id: 6, name: "Kamlesh", title: "", description: "This is test 5 Kamlesh"},
            {id: 7, name: "Kamlesh", title: "", description: "This is test 5 Kamlesh"},
            {id: 8, name: "Kamlesh", title: "", description: "This is test 5 Kamlesh"},
            {id: 9, name: "Tom", title: "", description: "This is test 9"},
            {id: 10, name: "Tom", title: "", description: "This is test 10"},
        ]
    }
}