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


export class  Lists {
    static studentList: Student[] = [
        { id: 1, nationalId: '32474202420', name: 'Özgür', surname: 'Çınar', lessons: null },
        { id: 2, nationalId: '11980059384', name: 'Ali Hadi', surname: 'Öztürk', lessons: null },
        { id: 3, nationalId: '65848752654', name: 'Onat', surname: 'Takak', lessons: null },
        { id: 4, nationalId: '45872699642', name: 'Nesrin', surname: 'Yılmaz', lessons: null }
    ]

    static lessonList:Lesson[]=[
        {id:1,name:'YAPAY ZEKA',code:'MYB222'},
        {id:1,name:'YAPAY ZEKA',code:'MYB222'},
        {id:1,name:'YAPAY ZEKA',code:'MYB222'}
    ]
}