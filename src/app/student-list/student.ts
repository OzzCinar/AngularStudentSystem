export class Student {
    id: number;
    nationalId: string;
    name: string;
    surname: string;
    lessons: Lesson[];
}

export class Lesson {
    id: number;
    code: string;
    name: string;
}


export class Lists {
    studentList: Student[] = [
        { id: 1, nationalId: '11980059384', name: 'Ali Hadi', surname: 'Öztürk', lessons: null },
        { id: 1, nationalId: '11980059384', name: 'Ali Hadi', surname: 'Öztürk', lessons: null },
        { id: 1, nationalId: '11980059384', name: 'Ali Hadi', surname: 'Öztürk', lessons: null },
        { id: 1, nationalId: '11980059384', name: 'Ali Hadi', surname: 'Öztürk', lessons: null }
    ]

    lessonList:Lesson[]=[
        {id:1,name:'YAPAY ZEKA',code:'MYB222'},
        {id:1,name:'YAPAY ZEKA',code:'MYB222'},
        {id:1,name:'YAPAY ZEKA',code:'MYB222'}
    ]
}